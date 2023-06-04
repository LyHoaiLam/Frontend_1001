
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

// Menu Show
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if(navClose){
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
var swiper = new Swiper(".discover__container", {/*Kéo ảnh Discover The Most Attractive Places */
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,/*Kéo ảnh không hết (hết rồi quay lại như vòng tròn) */
    spaceBetween: 5,/*Khoảng trống 2 ảnh khéo */
    coverflowEffect: {
      rotate: 50,   
    },
  });



  //Video
  const videoFile = document.getElementById('video-file'),
  videoButton = document.getElementById('video-button'),
  videoIcon = document.getElementById('video-icon')
  function playPause(){
    if(videoFile.paused){
        //Play video
        videoFile.play()
        //we change the icon
        videoIcon.classList.add('ri-pause-line')//Lấy trên swiper icon pause (class)
        videoIcon.classList.remove('ri-play-line')
    }else{
        //Pause video
        videoFile.pause()
        //We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')
    }
  }
  videoButton.addEventListener('click', playPause)

  function finalVideo(){
    //Video and, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
  }
  //end, whe the video ends
  videoFile.addEventListener('ended', finalVideo)
