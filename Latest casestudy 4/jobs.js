function displayError(errorMessage, element){
        var errorParagraph = document.getElementById(element);
        errorParagraph.textContent = errorMessage;
}

function validateName() {
  var name = document.getElementById("name").value;

  if (!name.match(/^[A-Za-z\s/g]+$/)) {
    displayError("Invalid Name", 'errorName');
    return false;
  } 
  else if (name.replace(/\s+/g, '').length < 3) {
    displayError("Invalid Name", "errorName");
    return false;}
  else {
    displayError('', "errorName");
    return true;
  }
}

function validateEmail() {
  var email = document.getElementById("email").value;

  if (!email.match(/^[\w.-]+@[\w]+(\.[A-Za-z]{2,3}){1,3}$/)) {
    displayError("Invalid Email", "errorEmail");
    return false;
  }
 else {
    displayError('', "errorEmail");
    return true;
  }
}

function validateExperience() {
  var experience = document.getElementById("experience").value;

  if (experience.replace(/\s+/g, '').length > 300) {
    alert("Experience has to be less than 300 letters");
    return false;}

  else {
    alert("Thank you for your submission.");
    return true;
  }
}

const nameid = document.getElementById("name");
const emailid = document.getElementById("email");

if (nameid) {
  nameid.addEventListener("input", validateName);
}

if (emailid) {
  emailid.addEventListener("input", validateEmail);
}

