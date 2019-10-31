var letter = document.querySelector(".write-us");
var popupLetter = document.querySelector(".letter");



letter.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupLetter.classList.add("letter-show");
});
