function validate() {

    if (document.myForm.email.value == "sachin@123" && document.myForm.password.value == "123") {
        window.location.href = "profile.html";
        alert("login sucessfull");
        return false;
    }
    if (document.myForm.email.value == "" && document.myForm.password.value == "") {
        alert("please enter email and password");
        return false;
    }
    if (document.myForm.email.value == "") {
        alert("please enter email ");
        return false;
    }
    if (document.myForm.password.value == "") {
        alert("please enter password ");
        return false;
    }
    else {
        alert("Please enter valid Email or Password");
    }
    return true;
}

// function validate() {
//     var un = document.forms["myform"]["email"].value;
//     var pw = document.forms["myform"]["password"].value;
//     if (un == "sachin@123" && pw == "1234") {
//         window.location.href = "profile.html";
//     }
//     else {
//         alert("login unsucessfull")
//     }
// }
