let slider = document.querySelector(".slider");
let slideLeft = document.querySelector(".slide-left");
let slideRight = document.querySelector(".slide-right");
let sliderImages = document.querySelectorAll(".slider-image");

slideLeft.addEventListener('click', () => {
  let currentSlide = parseInt(slider.getAttribute('data-current-slide'));

  if(currentSlide <= sliderImages.length) {
    slideRight.style.display = "block";
  }

  if(currentSlide - 1 == 1) {
    slideLeft.style.display = "none";
  }
  let percentage = (currentSlide - 2) * -100;
  moveSlide(percentage, currentSlide - 1);
});

slideRight.addEventListener('click', () => {
  let currentSlide = parseInt(slider.getAttribute('data-current-slide'));

  if(currentSlide >= 1) {
    slideLeft.style.display = "block";
  }

  if(currentSlide + 1 == sliderImages.length) {
    slideRight.style.display = 'none';
  };
  let percentage = currentSlide * -100;
  moveSlide(percentage, currentSlide + 1);
});

const moveSlide = (percentage, nextSlide) => {
  sliderImages.forEach((image) => {
    image.style.transform = `translateX(${percentage}%)`;
    slider.setAttribute('data-current-slide', nextSlide);
  });
}

