// // ===== Mobile menu script ===== \\
// const burgerBtn = document.querySelector('.burger-menu');
// const mobileMenu = document.querySelector('.mobile-popup');
// burgerBtn.addEventListener('click', function() {
//     this.classList.toggle('active');
//     mobileMenu.classList.toggle('active');
// });

// // ===== Accordion ===== \\
// document.querySelectorAll('.accordion-item__title').forEach(button => {
//     button.addEventListener('click', () => {
//       const accordionItem = button.parentElement;
//       const isActive = accordionItem.classList.contains('active');
  
//       document.querySelectorAll('.accordion-item').forEach(item => {
//         item.classList.remove('active');
//         item.querySelector('.accordion-content').style.maxHeight = null;
//       });
  
//       if (!isActive) {
//         accordionItem.classList.add('active');
//         const content = accordionItem.querySelector('.accordion-content');
//         content.style.maxHeight = content.scrollHeight + 'px';
//       }
//     });
//   });

// slider

$(document).ready(function(){
    $('.partners-slider__wrapper').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
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
                slidesToShow: 3,
                slidesToScroll: 3,
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
                slidesToShow: 1,
                slidesToScroll: 2,
                speed: 8000,
              }
            }
          ]
    });
  });

//   pop up

const popupBtn = document.querySelector('.header-btn'); // находим кнопку по её классу
const popup = document.querySelector('.popup-bg'); // находим попап по его классу
const closeBtn = document.querySelector('.close-popup'); // находим кнопку закрытия попапа по её классу
const html = document.querySelector('html');

// Ниже мы отслеживаем клик по кнопке, которая вызвает попап
popupBtn.addEventListener('click', function() {
    popup.classList.add('active'); // тут мы добавляем класс active к попапу
    html.classList.add('no-scroll');
});

// Ниже мы отслеживаем клик по кнопке, которая закрывает попап
closeBtn.addEventListener('click', function() {
    popup.classList.remove('active'); // тут мы удаляем класс active к попапу
    html.classList.remove('no-scroll');
});

// ===== Mobile menu script ===== \\
const burgerBtn = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.mobile-popup');
burgerBtn.addEventListener('click', function() {
    this.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});