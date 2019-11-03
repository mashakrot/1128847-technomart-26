var letter = document.querySelector(".write-us");
var popupLetter = document.querySelector(".letter");
var buttonClose = popupLetter.querySelector(".button-close");
var login = popupLetter.querySelector("[name=name]");
var password = popupLetter.querySelector("[name=e-mail]");
var textarea = popupLetter.querySelector("[name=later]");

var form = popupLetter.querySelector(".letter-form");

var isStorageSupport = true;
var storage = "";


try {
    storage = localStorage.getItem("login");
} catch (err) {
    isStorageSupport = false;
}


letter.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLetter.classList.add("letter-show");
    if (storage) {
        login.value = storage;
        password.focus();
    } else {
        login.focus();
    }
});

buttonClose.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLetter.classList.remove("letter-show");
    popupLetter.classList.remove("letter-error");
});

form.addEventListener("submit", function (evt) {
    if (!login.value || !password.value || !textarea.value) {
        evt.preventDefault();
        popupLetter.classList.add("letter-error");
    } else {
        if (isStorageSupport) {
            localStorage.setItem("login", login.value);
        }
    }
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        evt.preventDefault();
        if (popupLetter.classList.contains("letter-show")) {
            popupLetter.classList.remove("letter-show");
            popupLetter.classList.remove("letter-error");
        }
    }
});
