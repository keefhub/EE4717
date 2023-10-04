const name_validation = () => {
  const doc_name = document.getElementById("name").value;
  const test_name = /^[A-Za-z ]+$/;
  if (!test_name.test(doc_name)) {
    document.getElementById("name").style.border = "1px solid red";
    return false;
  } else {
    document.getElementById("name").style.border = "1px solid green";
    return true;
  }
};

const email_validation = () => {
  const doc_email = document.getElementById("email").value;
  const test_email = /^[A-Za-z0-9.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
  if (!test_email.test(doc_email)) {
    alert("Please enter a valid email");
    return false;
  } else {
    return true;
  }
};

const form_validation = () => {
  if (!name_validation()) {
    return false;
  }
  if (!email_validation()) {
    return false;
  } else {
    return true;
  }
};
