
//header Swiper
 var swiper = new Swiper(".slide-swp", {
   pagination: {
     el: ".swiper-pagination",
     dynamicBullests: true,
     clickable: true,
   },
   autoplay: { delay: 2500 },
   loop: true,
 });

 //product Swiper
var swiper = new Swiper(".slide_product", {
  slidesPerView: 5,
  spaceBetween:20,
  navigation: {
    nextEl :".swiper-button-next",
    prevEl : ".swiper-button-prev",
    },
    autoplay: { delay: 2500 },
    loop: true,
  });