let menu = document.querySelector('#Bars')
let navbar = document.querySelector('.navbar')

menu.onclick = function(){
  menu.classList.toggle('fa-times')
  navbar.classList.toggle('active')
}

window.onscroll = function(){

 menu.classList.remove('fa-times')
 navbar.classList.remove('active')
}
 document.querySelector('#search-icon').onclick = function(){
     document.querySelector('#search-form').classList.toggle('active')
 }
 document.querySelector('#close').onclick = function(){
     document.querySelector('#search-form').classList.remove('active')
 }

 let shoppingCart = document.querySelector('.shopping-cart');
 document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active')
 }

 let loginForm = document.querySelector('.login-form')
    document.querySelector('#Login-btn').onclick = ()=>{
    loginForm.classList.toggle('active');
 }

 var swiper = new Swiper(".product-slider", {
   spaceBetween: 20,
   autoplay: {
     delay: 2500,
     disableOnInteraction: false,
    },
    breakpoints:{
      0: {
        slidesPerView: 1,
      },
      768:{
        slidesPerView:2,
      },
      1020:{
        slidesPerView:3,
      }
    },
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    
    loop:true,
  },
  );