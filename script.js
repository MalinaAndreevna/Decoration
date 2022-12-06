const menuIcon = document.querySelector('.menu-icon'),
      header = document.querySelector('header');
      // body = document.querySelector('body')


menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('menu-icon--active');
  header.classList.toggle('header--mobile');
  // body.classList.toggle('no-scroll');
});

const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
});

$('.slider__btn--prev').click(function () {
	owl.trigger('prev.owl.carousel');
});


$('.slider__btn--next').click(function () {
	owl.trigger('next.owl.carousel');
});


// Anchors
const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(anc => {
  anc.addEventListener("click", function(event) {
    event.preventDefault();

    const id = anc.getAttribute("href");
    const elem = document.querySelector(id);


    window.scroll({
      top: elem.offsetTop - 80,
      behavior: 'smooth'
    });
  });
});

// Слайдер с точками
const sliderDots = document.querySelector('.slider-dots'),
      slidesDots = sliderDots.querySelectorAll('.slider-dots__item'),
      wrapperDots = sliderDots.querySelector('.slider-dots__nav');

const dots = [];

for (let i = 0; i < slidesDots.length; i++) {
  const dot = document.createElement('button');
  dot.dataset.slideTo = i;
  dot.classList.add('slider-dots__nav-item');
  if (i == 0) dot.classList.add('slider-dots__nav-item--active');

  if (i != 0) slidesDots[i].style.display = 'none';
  
  dot.addEventListener('click', showSlideDots)

  wrapperDots.append(dot);
  dots.push(dot);
}

function showSlideDots(e) {
  const slideTo = e.target.dataset.slideTo;

  slidesDots.forEach(item => item.style.display = 'none');
  slidesDots[slideTo].style.display = 'block';

  dots.forEach(dot => dot.classList.remove('slider-dots__nav-item--active'));
  e.target.classList.add('slider-dots__nav-item--active');
}