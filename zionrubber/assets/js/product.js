function openModal(modalId) {
  document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
  document.getElementById(modalId).style.display = "none";
}



document.querySelectorAll(".carousel").forEach(carousel => {

  const image = carousel.querySelector(".carousel-image");

  const images = carousel.dataset.images.split(",");

  let index = 0;

  // NEXT BUTTON
  carousel.querySelector(".next").addEventListener("click", () => {

    index++;

    if(index >= images.length) {
      index = 0;
    }

    image.src = images[index];

  });

  // PREV BUTTON
  carousel.querySelector(".prev").addEventListener("click", () => {

    index--;

    if(index < 0) {
      index = images.length - 1;
    }

    image.src = images[index];

  });

});
