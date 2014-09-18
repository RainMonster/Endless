function parallaxEye() {
  var eye = document.querySelector(".no-eye");
  eye.classList.add('animated');
}

window.onscroll = parallaxEye;