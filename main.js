let closeEye = document.getElementById("closeEye");
let password = document.getElementById("password");

let char = document.getElementById("char");
let upletter = document.getElementById("upletter");
let symbol = document.getElementById("symbol");

let para = document.getElementById("para");




closeEye.onclick = function() {
    if (password.type == "password") {
        password.type = "text";
        closeEye.src = "imgs/open eye.png";

    } else {
        password.type = "password";
        closeEye.src = "imgs/close eye.png";
    }
}

password.onkeyup = function() {
    let userpass = password.value;

    if (userpass.length >= 8) {

        char.firstElementChild.classList = "fa-solid fa-check";
        char.firstElementChild.style.color = "green";
        char.firstElementChild.style.fontSize = "15px";
    } else {
        char.firstElementChild.classList = "fa-solid fa-circle";
        char.firstElementChild.style.color = "#aaa";
        char.firstElementChild.style.fontSize = "8px";

    }

    let upperCaseLetter = /[A-Z]/;
    let result = upperCaseLetter.test(userpass);
    if (result) {
        upletter.firstElementChild.classList = "fa-solid fa-check";
        upletter.firstElementChild.style.color = "green";
        upletter.firstElementChild.style.fontSize = "15px";
    } else {
        upletter.firstElementChild.classList = "fa-solid fa-circle";
        upletter.firstElementChild.style.color = "#aaa";
        upletter.firstElementChild.style.fontSize = "8px";
    }

    let specialChar = /[!@#$%^&*()_+\-=\[\],?|]+/;
    if (userpass.match(specialChar)) {
        symbol.firstElementChild.classList = "fa-solid fa-check";
        symbol.firstElementChild.style.color = "green";
        symbol.firstElementChild.style.fontSize = "15px";
    } else {
        symbol.firstElementChild.classList = "fa-solid fa-circle";
        symbol.firstElementChild.style.color = "#aaa";
        symbol.firstElementChild.style.fontSize = "8px";

    }

    let para = document.getElementById("para");
    if (userpass.match(upperCaseLetter) && userpass.match(specialChar) || userpass.length >= 8 && userpass.match(specialChar) || userpass.length >= 8 && userpass.match(upperCaseLetter)) {
        password.style.border = "2px solid yellow";
        para.innerText = "medium Password";
        para.style.color = "yellow";

    } else {
        password.style.border = "2px solid red";
        para.style.display = "block";
        para.innerText = "Weak Password";
        para.style.color = "red";


    }
    if (userpass.match(upperCaseLetter) && userpass.match(specialChar) && userpass.length >= 8) {
        password.style.border = "2px solid green";
        para.innerText = "Strong Password";
        para.style.color = "green";



    }
}