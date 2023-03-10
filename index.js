
let username = document.getElementById('username');
let email = document.getElementById('email');
let phone = document.getElementById('phone');
let pass = document.getElementById('pass');
let cpass = document.getElementById('cpass');
let formerror = document.getElementsByClassName('formerror');
let button = document.querySelector('#Submit_btn');
let validuser = false;
let validemail = false;
let validphone = false;
let validpass = false;
let validcpass = false;



username.addEventListener("keyup", (e) => {
    e.preventDefault();
    const regex = /^[a-zA-Z]([a-zA-Z0-9]){2,14}$/;
    if (username.value.match(regex)) {
        validuser = true;
        formerror[0].innerHTML = "";
    }
    else {
        formerror[0].innerHTML = "*Username not more than fifteen  characters and must start with a lower or upper case letter. "
        validuser = false;
    }

})
email.addEventListener('keyup', (e) => {
    e.preventDefault();
    const regex = /^([a-zA-Z0-9\.\_\$\?\^\*\!\#\-]+)[@]([a-zA-Z0-9]+)\.([A-Za-z]){2,3}$/;
    if (email.value.match(regex)) {
        validemail = true;
        formerror[1].innerHTML = "";
    }
    else {
        formerror[1].innerHTML = "*Enter a valid email. "
        validemail = false;
    }

})
phone.addEventListener('keyup', (e) => {
    e.preventDefault();
    const regex = /^([0-9]){10}$/;
    if (phone.value.match(regex)) {
        validphone = true;
        formerror[2].innerHTML = "";
    }
    else {
        formerror[2].innerHTML = "*Number must be of 10 digits "
        validphone = false;
    }

})
pass.addEventListener('keyup', (e) => {
    e.preventDefault();
    const regex = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[\W\s])(?=.{8,})/;
    if (pass.value.match(regex)) {
        validpass = true;
        formerror[3].innerHTML = "";
    }
    else {
        formerror[3].innerHTML = "*Password must contain one lower case,upper case,special character,digit and must be more than 8 characters. "
        validpass = false;
    }

})
cpass.addEventListener('keyup', (e) => {
    e.preventDefault();
    if (cpass.value != pass.value) {
        formerror[4].innerHTML = " *Confirm Password Should match Password. "
        validcpass = false;
    }
    else {
        validcpass = true;
        formerror[4].innerHTML = "";
    }

})
button.addEventListener("click", (e) => {
    e.preventDefault();
    if (validuser && validemail && validphone && validpass && validcpass) {
        let green = document.querySelector(".green");
        green.classList.remove("green_d-none");
        let red = document.querySelector(".red")
        red.classList.add("red_d-none");
    }
    else {
        let red = document.querySelector(".red");
        red.classList.remove("red_d-none");
        let green = document.querySelector(".green");
        green.classList.add("green_d-none");

    }

})

let Success_btn = document.querySelector("#Success_btn")
Success_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let green = document.querySelector(".green");
    green.classList.add("green_d-none")

})
let Failure_btn = document.querySelector("#Failure_btn")
Failure_btn.addEventListener("click", (e) => {
    e.preventDefault();
    let green = document.querySelector(".red");
    green.classList.add("red_d-none")
})


































