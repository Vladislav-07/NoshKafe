const swiper = new Swiper('.swiper', {

  direction: 'horizontal',
  loop: true,

  spaceBetween: 0,

  autoplay: {

    delay: 5000,

    stopOnLastSlide: false,

    disableOnInteraction: false,

  },

  speed: 3500,

});

// document.querySelector(".burger").addEventListener("click", function() {
//   this.classList.toggle("active")
//   document.querySelector(".nav").classList.toggle("open")
//   document.querySelector(".navigation").classList.toggle("fullScreen")
//   document.querySelector(".title").classList.toggle("fullScreen")
//   document.querySelector(".body").classList.toggle("noScroll")
// })

function FormReset() {
  document.querySelector('.myForm').reset();
}