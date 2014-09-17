function parallaxEye() {
  var eye = document.querySelector(".booker");
  eye.classList.add('animated');
  // eye.style.visibility = "hidden";
}

window.onscroll = parallaxEye;