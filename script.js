const form = document.getElementById('book-now-form');
const formGroups = Array.from(form.getElementsByClassName('form-group'));

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const nextFormGroup = formGroups.find(group => !group.classList.contains('visible'));
  if (nextFormGroup) {
    nextFormGroup.classList.add('visible');
    const input = nextFormGroup.querySelector('input, textarea');
    if (input) {
      input.focus();
    }
  }
  // Get the slideshow container and slide elements
const slideshowContainer = document.querySelector('.slideshow-container');
const slides = Array.from(slideshowContainer.getElementsByClassName('slide'));

// Get the prev and next buttons
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Set the initial slide index
let slideIndex = 0;

// Function to show the current slide
function showSlide() {
  // Reset the transform property of all slides
  slides.forEach(slide => {
    slide.style.transform = `translateX(-${slideIndex * 100}%)`;
  });
}

// Function to navigate to the previous slide
function prevSlide() {
  slideIndex = (slideIndex === 0) ? slides.length - 1 : slideIndex - 1;
  showSlide();
}

// Function to navigate to the next slide
function nextSlide() {
  slideIndex = (slideIndex === slides.length - 1) ? 0 : slideIndex + 1;
  showSlide();
}

// Add event listeners to the prev and next buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Show the initial slide
showSlide();

});

$(document).ready(function () {
  const $app = $('.app');
  const $img = $('.app__img');
  const $pageNav1 = $('.pages__item--1');
  const $pageNav2 = $('.pages__item--2');
  let animation = true;
  let curSlide = 1;
  let scrolledUp, nextSlide;

  let pagination = function (slide, target) {
    animation = true;
    if (target === undefined) {
      nextSlide = scrolledUp ? slide - 1 : slide + 1;
    } else {
      nextSlide = target;
    }

    $('.pages__item--' + nextSlide).addClass('page__item-active');
    $('.pages__item--' + slide).removeClass('page__item-active');

    $app.toggleClass('active');
    setTimeout(function () {
      animation = false;
    }, 3000);
  };

  let navigateDown = function () {
    if (curSlide > 1) return;
    scrolledUp = false;
    pagination(curSlide);
    curSlide++;
  };

  let navigateUp = function () {
    if (curSlide === 1) return;
    scrolledUp = true;
    pagination(curSlide);
    curSlide--;
  };

  setTimeout(function () {
    $app.addClass('initial');
  }, 1500);

  setTimeout(function () {
    animation = false;
  }, 4500);

  $(document).on('mousewheel DOMMouseScroll', function (e) {
    var delta = e.originalEvent.wheelDelta;
    if (animation) return;
    if (delta > 0 || e.originalEvent.detail < 0) {
      navigateUp();
    } else {
      navigateDown();
    }
  });

  $(document).on("click", ".pages__item:not(.page__item-active)", function () {
    if (animation) return;
    let target = +$(this).attr('data-target');
    pagination(curSlide, target);
    curSlide = target;
  });
});