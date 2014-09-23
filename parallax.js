function parallaxEye() {
  var eye = document.querySelector(".eye-images-overlay");
  eye.classList.add('animated');
}

window.onscroll = parallaxEye;