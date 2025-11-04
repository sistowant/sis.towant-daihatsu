// the variables of the image slider
const image = document.querySelector(".slide-image");
const imageNumber = document.querySelector(".slide-image-number");
const totalImageNumber = document.querySelector(".total-image-number");
const prevBtn = document.querySelector(".backward");
const nextBtn = document.querySelector(".forward");

// the image array
const images = [
  "./img/01-living-room-blue-theme.jpg",
  "./img/02-living-room-couch.jpg",
  "./img/03-living-room-red-theme.jpg",
  "./img/04-modern-kitchen.jpg",
];

// the index of the image on page load
let currentImage = 0;

// the image details that shows when the webpage loads
window.addEventListener("DOMContentLoaded", showImage);

// function to select and change the image details
function showImage() {
  image.src = images[currentImage];
  imageNumber.textContent = currentImage + 1;
  totalImageNumber.textContent = images.length;
}

