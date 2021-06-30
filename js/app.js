

new Swiper(".swiper-container", {
    loop: true,
    sapceBetween: 20,
    slidesPerView: 6,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
        },
        breakpoints: {
                  200: {
                    slidesPerView: 1.5,
                    spaceBetween: 0,
                  },
                  321: {
                      slidesPerView: 2,
                      spaceBetween: 5,
                  },
                  480: {
                    slidesPerView: 2.7,
                    spaceBetween: 10,
                  },
                  767: {
                    slidesPerView: 4,
                    spaceBetween: 5,
                  },
                  1200: {
                    slidesPerView: 6,
                    spaceBetween: 15,
                  },
                 },
});

let swiperBanner = new Swiper(".swiper-banner", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    slidesPerView: 1,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// new Swiper(".swiper-container", {
//     loop: true,
//     slidesPerView: 6,
  
//     spaceBetween: 20,
//     // Navigation arrows
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//     breakpoints: {
//       200: {
//         slidesPerView: 2.6,
//         spaceBetween: 20,
//       },
//       540: {
//         slidesPerView: 3,
//         spaceBetween: 20,
//       },
//       767: {
//         slidesPerView: 4,
//         spaceBetween: 20,
//       },
//       1024: {
//         slidesPerView: 5,
//         spaceBetween: 20,
//       },
//       1200: {
//         slidesPerView: 6,
//         spaceBetween: 20,
//       },
//      },
//   });


document.addEventListener("DOMContentLoaded", ()=>{
    const nav = document.querySelector(".nav");
    document.querySelector("#btnNav").addEventListener("click", () =>{
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav__overlay").addEventListener("click", () => {
        nav.classList.remove("nav--open");
    });
});

window.addEventListener("load", () => {
    document.body.classList.remove("preload");
});