
$(document).ready(function(){
    $('.skill-slider').slick({
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 8,
        speed: 20000,
        dots: false,
        autoplay: true,
        autoplaySpeed: 0,
        cssEase: 'linear',
        pauseOnHover: false,
        arrows: false,
        // prevArrow: '<button class="arrow slider-prev"><img src="/img/prev.svg" alt=""></button>',
        // nextArrow: '<button class="arrow slider-next"><img src="/img/next.svg" alt=""></button>',
        

        // adaptive
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 5,
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                speed: 10000,
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                speed: 2000,
              }
            }
          ]
    });
  });

  // Lazy Loading

  const projectItems = document.querySelectorAll('.projects-item__right, .projects-item__arrow, .works-item__wrapper');

function checkVisibility() {
  projectItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.8;

    if (itemTop < triggerPoint) {
      item.classList.add('show');
    }
  });
}

// gallery

Fancybox.bind("[data-fancybox]", {
  // Your custom options
});

window.addEventListener('scroll', checkVisibility);
checkVisibility();

