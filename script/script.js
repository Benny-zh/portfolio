$(document).ready(function(){
     $(window).scroll(function(){
          if(this.scrollY > 20){
               $('.navbar').addClass("sticky");
          }else{
               $('.navbar').removeClass("sticky");
          }
          if(this.scrollY > 200){
               $('.scroll-up-btn').addClass("show");
          }else{
               $('.scroll-up-btn').removeClass("show");
          }
     });

     // Scroll up script
     $('.scroll-up-btn').click(function(){
          $('html').animate({scrollTop: 0});
     });

     //toggle menu/navbar script
     $('.menu-btn').click(function(){
          $('.navbar .menu').toggleClass("active");
          $('.menu-btn i').toggleClass("active");
     });

     // typing animation script

     if($(window).width()<690) {
          var typed = new Typed(".typing", {
               strings: ["Web Developer", "Back-end developer"],
               typeSpeed: 100,
               backSpeed: 60,
               loop: false
          });
          var typed = new Typed(".typing-2", {
               strings: ["Web Developer", "Back-end developer"],
               typeSpeed: 100,
               backSpeed: 60,
               loop: false
          });
     }
     else {
          var typed = new Typed(".typing", {
               strings: ["Web Developer", "Back-end developer"],
               typeSpeed: 100,
               backSpeed: 60,
               loop: true
          });
          var typed = new Typed(".typing-2", {
               strings: ["Web Developer", "Back-end developer"],
               typeSpeed: 100,
               backSpeed: 60,
               loop: true
          });
     }; 

     // video popup script
     document.querySelectorAll('.myworks .popup-click').forEach(a => {
          a.onclick = () =>{
               document.querySelector('.popup-video').style.display = 'block';  
          } 
     });
     document.querySelector('.myworks .popup-video span').onclick = () => {
          document.querySelector('.popup-video').style.display = 'none';
     }
})