

const nav = document.querySelector('.nav__list');
const navBurger = document.querySelector('.nav-burger');
const navClose = document.querySelector('.nav-burger-close');
const body = document.body;
const aside = document.querySelector('.aside-left');


navBurger.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('lock');
    aside.classList.toggle('active');
})
navClose.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('lock');
    aside.classList.toggle('active');
})
aside.addEventListener('click', () => {
    nav.classList.toggle('active');
    body.classList.toggle('lock');
    aside.classList.toggle('active');
})




const moreOpen = document.querySelector('.more-link-open');
const moreClose = document.querySelector('.more-link-close');
const contant = document.querySelector('.tabsContantItem');


moreOpen.addEventListener('click', () => {
    moreOpen.classList.toggle('active');
    contant.classList.toggle('active');
    moreClose.classList.toggle('active');
})
moreClose.addEventListener('click', () => {
    moreOpen.classList.toggle('active');
    contant.classList.toggle('active')
    moreClose.classList.toggle('active');
})



const swiper = new Swiper('.brands__swiper', {
    
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    simulateTouch: true,

    touchRatio:1,

    touchAngle: 45,

    grabCursor: true,

    slidesPerView: 'auto',



  
  });