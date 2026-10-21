let categoryNavList = document.querySelector('.category_nav_list');

function open_Categ_List() {
  categoryNavList.classList.toggle('active')
}



//Initialize Swiper
 var swiper = new Swiper(".slide-swp", {
   pagination: {
     el: ".swiper-pagination",
     dynamicBullests: true,
     clickable: true,
   },
   autoplay: { delay: 2500 },
   loop: true,
 });