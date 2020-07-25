function validateForm() {
  var firstname = document.forms["regform"]["fname"].value;
  var lastname = document.forms["regform"]["lname"].value;
  var mail = document.forms["regform"]["mail"].value;
  var subject = document.forms["regform"]["subject"].value;
  if (firstname == "") {
    alert("Please fill your First name");
    return false;
  }
  if (lastname == "") {
    alert("Please fill your Last name");
    return false;
  }
  if (mail == "") {
    alert("Please fill your email Id");
    return false;
  }
  if (subject == "") {
    alert("Please provide comments in subject");
    return false;
  }
}
