﻿/*
    domForms.js
    -----------
    Purpose: Populates student and course fields in forms for both HomePage.html and AssignmentXX.html.
             Validates that required fields are present, warns if any are "undefined".
    Access: Students: read-only; Instructor: may update logic as needed
    Dependencies: Must load after studentConstants.js and courseConstants.js.
    Author: Patrick G Paulson + ChatGPT, June 2025
*/

// --- Helper: Set a form field if present ---
function setFormField(form, name, value) {
    if (form && form.elements[name]) {
        form.elements[name].value = (typeof value !== "undefined") ? value : "undefined";
    }
}

// --- Helper: Set text content of a DOM element ---
function setElementText(id, value) {
    var el = document.getElementById(id);
    if (el) el.innerHTML = (typeof value !== "undefined") ? value : "undefined";
}

// --- Validation: Warn if required fields are missing ---
function checkUndefinedFields(formId, warningId, requiredVars) {
    var form = document.getElementById(formId);
    var warning = document.getElementById(warningId);
    let missing = [];
    requiredVars.forEach(function (v) {
        let f = form && form.elements[v];
        if (f && (f.value === "undefined" || f.value === "")) missing.push(v);
    });
    if (missing.length && warning) {
        warning.innerHTML = `<div style="background:yellow; color:black; padding:8px; font-weight:bold;">
            Warning: Missing or undefined fields: ${missing.join(", ")}. Submission will still be allowed, but contact support if this persists.
        </div>`;
    } else if (warning) {
        warning.innerHTML = "";
    }
}

// --- Initialization for HomePage.html ---
function initializeHomePage() {
    var attendanceForm = document.forms["frmAttendance"];
    var assignmentReportForm = document.forms["frmAssignmentReport"];

    // Populate Attendance form
    setFormField(attendanceForm, "FirstName", typeof FirstName !== "undefined" ? FirstName : "undefined");
    setFormField(attendanceForm, "LastName", typeof LastName !== "undefined" ? LastName : "undefined");
    setFormField(attendanceForm, "StarID", typeof StarID !== "undefined" ? StarID : "undefined");
    setFormField(attendanceForm, "pin", typeof pin !== "undefined" ? pin : "undefined");
    setFormField(attendanceForm, "email", typeof studentEmailAddress !== "undefined" ? studentEmailAddress : "undefined");
    setFormField(attendanceForm, "Semester", typeof Semester !== "undefined" ? Semester : "undefined");
    setFormField(attendanceForm, "Class", typeof Class !== "undefined" ? Class : "undefined");
    setFormField(attendanceForm, "Section", typeof Section !== "undefined" ? Section : "undefined");
    setFormField(attendanceForm, "assignment", "Attendance");
    setFormField(attendanceForm, "InstID", "00617282");

    // Populate Assignment Submissions Report form
    setFormField(assignmentReportForm, "FirstName", typeof FirstName !== "undefined" ? FirstName : "undefined");
    setFormField(assignmentReportForm, "LastName", typeof LastName !== "undefined" ? LastName : "undefined");
    setFormField(assignmentReportForm, "StarID", typeof StarID !== "undefined" ? StarID : "undefined");
    setFormField(assignmentReportForm, "pin", typeof pin !== "undefined" ? pin : "undefined");
    setFormField(assignmentReportForm, "Semester", typeof Semester !== "undefined" ? Semester : "undefined");
    setFormField(assignmentReportForm, "Class", typeof Class !== "undefined" ? Class : "undefined");
    setFormField(assignmentReportForm, "Section", typeof Section !== "undefined" ? Section : "undefined");

    // Populate display elements
    setElementText("Heading", typeof pageHeading !== "undefined" ? pageHeading : "undefined");
    setElementText("emailStudent", typeof studentEmailLink !== "undefined" ? studentEmailLink : "undefined");
    setElementText("nwid", typeof NetworkUsernameLink !== "undefined" ? NetworkUsernameLink : "undefined");
    setElementText("licenseInfo", typeof ccLicense !== "undefined" ? ccLicense : "undefined");
    setElementText("footerText", Date());

    // -- Populate the student email button link (if present) --
    var emailButton = document.getElementById("emailStudentButton");
    if (emailButton && typeof studentEmailAddress !== "undefined" && typeof FirstName !== "undefined") {
        // Build the mailto: link and label for the button
        emailButton.href = "mailto:" + studentEmailAddress
            + "?subject=" + encodeURIComponent(Class + "-" + Section + " Assignment Feedback")
            + "&cc=mista@winona.edu"
            + "&body=" + encodeURIComponent(FirstName + " " + LastName + "\n\nFor assistance correcting any errors please contact a course TA or Professor Paulson");
        emailButton.innerHTML = "Email Feedback to " + FirstName;
    }

    // Validation
    checkUndefinedFields("frmAttendance", "attendanceWarning", ["FirstName", "LastName", "StarID", "pin", "Semester", "Class", "Section"]);
    checkUndefinedFields("frmAssignmentReport", "assignmentWarning", ["FirstName", "LastName", "StarID", "pin", "Semester", "Class", "Section"]);
}

// --- Path population for AssignmentXX.html pages ---
function populateAssignmentPaths() {
    var assignmentForm = document.forms["frmAssignment"];
    if (!assignmentForm) return;

    // Get the assignment value from the form (fallback to empty string if not found)
    var assignmentValue = assignmentForm.elements["assignment"] ? assignmentForm.elements["assignment"].value : "";

    // Use standardized 'Class' variable for path
    var path = "\\OneDrive - Minnesota State\\" + (typeof Class !== "undefined" ? Class : "") + "\\" + assignmentValue + "\\";

    // Update all Path1..Path20 span elements if present
    for (var i = 1; i <= 20; i++) {
        var el = document.getElementById("Path" + i);
        if (el) el.innerHTML = path;
    }
}


// --- Initialization for AssignmentXX.html ---
function initializeAssignmentForm() {
    var assignmentForm = document.forms["frmAssignment"];
    setFormField(assignmentForm, "FirstName", typeof FirstName !== "undefined" ? FirstName : "undefined");
    setFormField(assignmentForm, "LastName", typeof LastName !== "undefined" ? LastName : "undefined");
    setFormField(assignmentForm, "StarID", typeof StarID !== "undefined" ? StarID : "undefined");
    setFormField(assignmentForm, "pin", typeof pin !== "undefined" ? pin : "undefined");
    setFormField(assignmentForm, "email", typeof studentEmailAddress !== "undefined" ? studentEmailAddress : "undefined");
    setFormField(assignmentForm, "Semester", typeof Semester !== "undefined" ? Semester : "undefined");
    setFormField(assignmentForm, "Class", typeof Class !== "undefined" ? Class : "undefined");
    setFormField(assignmentForm, "Section", typeof Section !== "undefined" ? Section : "undefined");
    setFormField(assignmentForm, "InstID", "00617282");

    // Set UI elements
    setElementText("Heading", typeof pageHeading !== "undefined" ? pageHeading : "undefined");
    setElementText("emailStudent", typeof xMailTo !== "undefined" ? xMailTo : "undefined");
    setElementText("licenseInfo", typeof ccLicense !== "undefined" ? ccLicense : "undefined");
    setElementText("footerText", Date());

    checkUndefinedFields("frmAssignment", "assignmentWarning", ["FirstName", "LastName", "StarID", "pin", "Semester", "Class", "Section"]);

    // === Populate Path1...Path20 spans if present ===
    populateAssignmentPaths();
}

// --- Auto-initialize based on forms present ---
document.addEventListener("DOMContentLoaded", function () {
    if (document.forms["frmAttendance"] && document.forms["frmAssignmentReport"]) {
        initializeHomePage();
    } else if (document.forms["frmAssignment"]) {
        initializeAssignmentForm();
    }
});
