$(function() {

  $(".hamburger-box").click(function(){
    $('.hamburger-line1').toggleClass("hamburger-line1-active")
    $('.hamburger-line2').toggleClass("hamburger-line2-active")
    $('.hamburger-line3').toggleClass("hamburger-line3-active")
    $('.hamburger-menu').toggleClass("hamburger-menu-show")
  });

});

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("Slider_img");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
}