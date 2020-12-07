var saveFormbtn = document.getElementById('saveForm');
saveFormbtn.addEventListener('click', saveFormValidation);

var textName = document.getElementById('element_1');
var textEmail = document.getElementById('element_2');
var textPassword = document.getElementById('element_3');
var textCountry = document.getElementById('element_6');

var nameError = document.getElementById("nameError");
var emailError = document.getElementById("emailError");
var passwordError = document.getElementById("passwordError");
var genderError = document.getElementById("genderError");
var sportsError = document.getElementById("sportsError");
var countryError = document.getElementById("countryError");

function saveFormValidation() {

    if (textName.value == "" || textName.value == null) {

        nameError.style.color = "red";
        nameError.innerHTML = "name is required";
    }
    else {
        nameError.innerHTML = "";
    }

    var emailPattern = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(textEmail.value);

    if (!emailPattern || textEmail.value == "" || textEmail.value == null) {
        emailError.style.color = "red";
        emailError.innerHTML = "email is required example@gmail.com";
    }
    else {
        emailError.innerHTML = "";

    }

    if (textPassword.value == "" || textPassword.value == null || textPassword.value.length < 8) {
        passwordError.style.color = "red";
        passwordError.innerHTML = "password is required ########";

    }
    else {
        passwordError.innerHTML = "";

    }



    //radio

    var checks = document.getElementsByTagName('input');
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].type == 'radio') {
            if (checks[i].checked == true) {
                genderError.innerHTML = "";

            }
            else {
                genderError.style.color = "red";
                genderError.innerHTML = "choose your gender";
            }
        }
    }
   
    

    if (!textCountry.value) {

        countryError.style.color = "red";
        countryError.innerHTML = "choose ypur country";
    }
    else {
        countryError.innerHTML = "";

    }

 // checkbox
    for (let i = 0; i < checks.length; i++) {
        if (checks[i].type == 'checkbox') {
            if (checks[i].checked == true) {
                sportsError.innerHTML = "";
                return true;

            }
            else {
                sportsError.style.color = "red";
                sportsError.innerHTML = "choose at least 2 sports";

            }

        }

    }


}