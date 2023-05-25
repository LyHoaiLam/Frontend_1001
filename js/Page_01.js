
const navMenu = document.getElementById('nav-menu'), //lấy id
    navToggle = document.getElementById('nav-toggle'), // idicon toggle
    navClose = document.getElementById('nav-close')// id icon close

//Menu show
if(navToggle){//Click icon vào hiện ra Menu
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

//Menu Hideen
if(navClose){//Click icon vào hiện ra Menu
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// click hidden and show liên tục thì thay đổi class nav__menu + class show-menu và ngược lại mất class show-menu
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

// Remove menu Mobile

const navLink = document.querySelectorAll('.nav__link')// Home, About, Discover, Place
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

//Change Background Header
function scrollHeader(){
    const header = document.getElementById('header')
    if(this.scrollY >= 100) header.classList.add('scroll=header'); else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader)


// Swiper Discover
var swiper = new Swiper(".discover__container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
  });