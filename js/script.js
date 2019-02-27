var modal = document.querySelector(".button-connect");
var popup = document.querySelector(".modal");
var close = document.querySelector(".modal-close");
var form = popup.querySelector("form");
var login = popup.querySelector("[name=user-name]");
var email = popup.querySelector("[name=user-email-feedback]");
var isStorageSupport = true;
var storage = "";

var siteWrapper = document.querySelector(".site-wrapper");
var firstSlider = document.querySelector(".button-slider-first");
var secondSlider = document.querySelector(".button-slider-second");
var thirdSlider = document.querySelector(".button-slider-third");
var sliderHeading = document.querySelector(".slider-heading");

firstSlider.addEventListener("click", function(evt){
  evt.preventDefault();
  siteWrapper.style.backgroundImage = "url(img/slider-background.png)";
  document.body.style.background = "#849d8f";
  sliderHeading.innerHTML = "Крем-брюле и пломбир с малиновым джемом";
  firstSlider.classList.add("active");
  secondSlider.classList.remove("active");
  thirdSlider.classList.remove("active");
});
secondSlider.addEventListener("click", function(evt){
  evt.preventDefault();
  siteWrapper.style.backgroundImage = "url(img/slider-2.png)";
  document.body.style.background = "#8996a6";
  sliderHeading.innerHTML = "Шоколадный пломбир и лимонный сорбет";
  firstSlider.classList.remove("active");
  secondSlider.classList.add("active");
  thirdSlider.classList.remove("active");
});
thirdSlider.addEventListener("click", function(evt){
  evt.preventDefault();
  siteWrapper.style.backgroundImage = "url(img/slider-3.png)";
  document.body.style.background = "#9d8b84";
  sliderHeading.innerHTML = "Пломбир с помадкой и клубничный щербет";
  firstSlider.classList.remove("active");
  secondSlider.classList.remove("active");
  thirdSlider.classList.add("active");
});
modal.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("feedback-form-open");
  popup.classList.add("animation-open");
  if (storage){
      login.value = storage;
      email.focus();
    } else{
      login.focus();
    }
});
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("feedback-form-open");
  popup.classList.remove("modal-error");
});
try {
    storage = localStorage.getItem("login");
  } catch (err) {
    isStorageSupport = false;
}  
form.addEventListener("submit", function(evt){
  if (!login.value || !email.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.classList.remove("animation-open");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("login", login.value);
    }
  }
});
  
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (popup.classList.contains("modal")) {
        popup.classList.remove("feedback-form-open");
        popup.classList.remove("modal-error");
      }
    }
  });