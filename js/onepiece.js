/*******************NAV BAR HAMBURGUESA*******************   */
function openNav() {
  document.getElementById("mySidenav").style.width = "190px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
/**************MODAL FOOTER***********************/

var modal = document.getElementById("myModal");
// Boton que abre el modal
var btn = document.getElementById("myBtn");
// Boton que cierra el modal
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
// Si clicas fuera del modal se cierra tambien
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//Slider
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}
