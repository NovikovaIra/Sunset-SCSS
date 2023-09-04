import './node_modules/reset-css/sass/_reset.scss';
import './main.scss';
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 0,
  loop:true,
  navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      768: {
          slidesPerView: 1,
          spaceBetween: 0,
      },
      1024: {
          slidesPerView: 2,
          spaceBetween: 15,
      },
      1280: {
          slidesPerView: 3,
          spaceBetween: 30,
      }
  }
});
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})
document.getElementById("triggger").addEventListener("click", function(){
    Fancybox.show([
        {
          src: "https://youtu.be/aSk-D86aOtc?si=NAuXbjgqkHTNCxqu",
          type: "video",
          ratio: 16 / 10,
          width: 640,
          height: 360,
        },
      ]);
    });


// import Swiper from 'swiper/bundle';

// // import styles bundle
// import 'swiper/css/bundle';

// // init Swiper:
// const swiper = new Swiper(...);
