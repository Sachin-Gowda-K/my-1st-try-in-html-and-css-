function validate() {
    if (document.myForm.name.value == "") {
        alert("Please enter the name");
        document.myForm.name.focus();
        return false;
    }
    if (document.myForm.email.value == "") {
        alert("Please enter the email");
        document.myForm.email.focus();
        return false;
    }
    if (document.myForm.password.value == "") {
        alert("Please enter the password");
        document.myForm.password.focus();
        return false;
    }
    if (document.myForm.password1.value == "") {
        alert("Please Conform The Password");
        document.myForm.password1.focus();
        return false;
    }
    return true;
}