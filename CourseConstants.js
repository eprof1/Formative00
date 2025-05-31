// CourseConstants.js
// Professor-controlled course-wide constants for MIS202

// mapping assignment to week
var assignmentMap = {
    1: "Formative00",
    2: "LinkedIn Learning-01",
    3: "Summative02",
    4: "Summative03",
    5: "Summative04",
    6: "Summative05",
    7: "Summative06",
    8: "Summative07",
    9: "",
    10: "Summative08",
    11: "Summative09",
    12: "Summative10",
    13: "Summative11",
    14: "Summative12",
    15: "Summative13",
    16: "GenerativeAI",
    17: "LateWork"
    // etc. - match your table!
};


// Course info
var xSemester = "Spring2025";
var xClass = "MIS202";
var xSection = "01";

// Versioning
var courseConstantsVersion = "1.1";
var lastUpdated = "2024-05-28";

// Student-generated fields (require constants.js present)
var xeMail = (typeof xStarID !== "undefined" ? xStarID : "") + "@go.minnstate.edu";

// NetworkUsername link for home page
var NetworkUsername = (typeof xNetworkUsername !== "undefined" && xNetworkUsername) ?
    '<a href="https://studentwebs.winona.edu/' + xNetworkUsername + '" class="bg-info text-white" target="_blank">Studentwebs</a>' : "";

// Email feedback link
var xMailTo = (typeof xFirstName !== "undefined" && typeof xLastName !== "undefined" && typeof xClass !== "undefined" && typeof xSection !== "undefined") ?
    '<a href="mailto:' + xeMail + '?subject=' + xClass + '-' + xSection + 'AssignmentFeedback&amp;cc=mista@winona.edu&amp;body=' +
    xFirstName + ' ' + xLastName + '%2C%0A%0AFor%20assistance%20correcting%20any%20errors%20please%20contact%20a%20course%20TA%20or%20Professor%20Paulson" class="text-danger h3">Email Feedback to ' +
    xFirstName + '</a>' : "";

// Home page heading
var pageHeading = (typeof xFirstName !== "undefined" && typeof xLastName !== "undefined" && typeof xClass !== "undefined" && typeof xSection !== "undefined" && typeof xSemester !== "undefined") ?
    '<h1 class="text-center text-primary">' + xFirstName + ' ' + xLastName + ' ' + xClass + '-' + xSection + ' ' + xSemester + ' Home Page</h1>' :
    '<h1 class="text-center text-primary">MIS202 Home Page</h1>';

// Creative Commons License footer
var ccLicense =
    '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />' +
    '<span>eProfessor Immersive Learning Environment</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eprofessor.azurewebsites.net" property="cc:attributionName" rel="cc:attributionURL">Patrick G Paulson</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.';

// Function to set values in forms, called on page load by HomePage.html
function setVariables() {
    // Student info
    if (document.getElementById("FirstName")) document.getElementById("FirstName").value = typeof xFirstName !== "undefined" ? xFirstName : "";
    if (document.getElementById("LastName")) document.getElementById("LastName").value = typeof xLastName !== "undefined" ? xLastName : "";
    if (document.getElementById("pin")) document.getElementById("pin").value = typeof xStarID !== "undefined" ? xStarID : "";
    if (document.getElementById("email")) document.getElementById("email").value = typeof xeMail !== "undefined" ? xeMail : "";

    // Course info
    if (document.getElementById("semester")) document.getElementById("semester").value = xSemester;
    if (document.getElementById("class")) document.getElementById("class").value = xClass;
    if (document.getElementById("section")) document.getElementById("section").value = xSection;

    // Attendance form fields
    if (document.getElementById("FirstName3")) document.getElementById("FirstName3").value = typeof xFirstName !== "undefined" ? xFirstName : "";
    if (document.getElementById("LastName3")) document.getElementById("LastName3").value = typeof xLastName !== "undefined" ? xLastName : "";
    if (document.getElementById("pin3")) document.getElementById("pin3").value = typeof xStarID !== "undefined" ? xStarID : "";
    if (document.getElementById("email3")) document.getElementById("email3").value = typeof xeMail !== "undefined" ? xeMail : "";
    if (document.getElementById("semester3")) document.getElementById("semester3").value = xSemester;
    if (document.getElementById("class3")) document.getElementById("class3").value = xClass;
    if (document.getElementById("section3")) document.getElementById("section3").value = xSection;

    // License and footer are set in HomePage.html after all variables are set
}
// End of CourseConstants.js
