var TrandingSlider = new Swiper('.swiper', {
  effect: 'coverflow',
  grabCursor: true,
  centeredSlides: true,
  loop: true,
  coverflowEffect: {
    rotate: 0,
    stretch: -100,
    depth: 200,
    modifier: 1,
  },
  breakpoints: {
    300: {
      slidesPerView: '2',
    },
    1400: {
      slidesPerView: '3',
    }

  },
  shadow: true,
  mousewheel: true,
  on: {
    slideChange: function () {
      const activeSlide = this.slides[this.activeIndex];
      const backgroundImage = activeSlide.dataset.background;
      console.log("Background Image:", backgroundImage);

      document.body.style.backgroundImage = `url(${backgroundImage})`;
      document.body.style.backgroundSize = 'cover';
      document.body.style.backgroundPosition = 'center';
      document.body.style.backgroundRepeat = 'no-repeat';

      const title = activeSlide.dataset.title;
      const year = activeSlide.dataset.year;
      const rating = activeSlide.dataset.rating;
      const genre = activeSlide.dataset.genre;
      const description = activeSlide.dataset.description;


      document.querySelector('.movie-title').textContent = title;
      document.querySelector('.movie-year').textContent = `Year: ${year}`;
      document.querySelector('.movie-rating').textContent = `Age Rating: ${rating}`;
      document.querySelector('.movie-genre').textContent = `Genre: ${genre}`;
      document.querySelector('.movie-description').textContent = `Description: ${description}`;
    }
  }
});

