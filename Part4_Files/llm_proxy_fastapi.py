\
"""
LLM Proxy (FastAPI) - MIS student tool

Purpose
- Provides a simple local endpoint for browser apps to call, avoiding CORS issues.
- Lets you route requests to:
  - Ollama (local)
  - LM Studio (local)
  - OpenAI (cloud) if you set OPENAI_API_KEY

Run
1) Activate your env:
   conda activate wsu-mis

2) Start the server:
   uvicorn llm_proxy_fastapi:app --port 8001

Then open your HTML page and choose "Python Proxy".
"""
from __future__ import annotations

import os
from typing import Optional, Literal

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from openai import OpenAI

app = FastAPI(title="MIS LLM Proxy", version="1.0")

# Allow local browser clients
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    prompt: str
    model: str = "llama3.2:1b"
    provider: Literal["ollama", "lmstudio", "openai"] = "ollama"
    remote_base_url: Optional[str] = None  # optional: target a remote server

class ChatResponse(BaseModel):
    text: str
    provider: str
    model: str

def get_client(req: ChatRequest) -> OpenAI:
    if req.provider == "ollama":
        base_url = req.remote_base_url or "http://localhost:11434/v1"
        return OpenAI(base_url=base_url, api_key="ollama")
    if req.provider == "lmstudio":
        base_url = req.remote_base_url or "http://localhost:1234/v1"
        return OpenAI(base_url=base_url, api_key="lmstudio")

    key = os.getenv("OPENAI_API_KEY", "")
    if not key:
        raise RuntimeError("OPENAI_API_KEY is not set. Set it or use provider=ollama/lmstudio.")
    return OpenAI(api_key=key)

@app.post("/chat", response_model=ChatResponse)
def chat(req: ChatRequest) -> ChatResponse:
    client = get_client(req)
    resp = client.chat.completions.create(
        model=req.model,
        messages=[{"role": "user", "content": req.prompt}],
        temperature=0.2,
    )
    return ChatResponse(
        text=resp.choices[0].message.content or "",
        provider=req.provider,
        model=req.model,
    )
