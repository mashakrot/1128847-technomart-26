var map = document.querySelector(".small-map-link");
var popupMap = document.querySelector(".large-map");
var close = popupMap.querySelector(".modal-close");

map.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.add("map-show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popupMap.classList.remove("map-show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popupMap.classList.contains("map-show")) {
        popupMap.classList.remove("map-show");
      }
    }
  });