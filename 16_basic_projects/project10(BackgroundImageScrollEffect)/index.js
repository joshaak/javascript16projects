const bgimageEl = document.getElementById("bg-image");

window.addEventListener("scroll", () => {
  updateImage();
});

function updateImage() {
  bgimageEl.style.opacity = 1 - window.pageYOffset / 800;
  bgimageEl.style.backgroundSize = 150 - window.pageYOffset / 12 + "%";
}
