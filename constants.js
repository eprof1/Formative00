// these are constants for course during current semester

// student- update variables below this line

var xeMail = "MyStarID@go.minnstate.edu";

var xFirstName = "MyFirstName";

var xLastName = "MyLastName";

var xStarID = "MyStarID";

var xSection = "MySection";


// student-do no modify variables below here, unless told to do so.

// Creative Commons License footer
var ccLicense = '<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons License"  src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br /><span >eProfessor Immersive Learning Environment</span> by <a xmlns:cc="http://creativecommons.org/ns#" href="https://eprofessor.azurewebsites.net" property="cc:attributionName" rel="cc:attributionURL">Patrick G Paulson</a> is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.';

// current semester
var xSemester = "Fall2019";
// no class constants allowed in this Formative00 constants file
// var xClass = "MIS202";

// variables below tell students where to save screen shot and .pdf files
var startPath = "<code> C:&#92;Users&#92;";



function setVariables() {
    document.getElementById("email").value = xeMail;
    document.getElementById("FirstName").value = xFirstName;
    document.getElementById("LastName").value = xLastName;
    document.getElementById("pin").value = xStarID;

    document.getElementById("semester").value = xSemester;
    // document.getElementById("class").value = xClass;
    document.getElementById("section").value = xSection;


    document.getElementById("xLicense").innerHTML = ccLicense;
    document.getElementById("xfooter").innerHTML = Date();
  //  document.getElementById("xpath").innerHTML = startPath + xStarID + "&#92;OneDrive - MNSCU&#92;" + document.getElementById("class").value + "&#92;" + document.getElementById("assignment").value + "&#92;";

    document.getElementById("xpath").innerHTML = "OneDrive - MNSCU&#92;" + document.getElementById("class").value + "&#92; " + document.getElementById("assignment").value;


}