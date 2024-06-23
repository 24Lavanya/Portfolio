

const menuIcon = document.querySelector(".icon ion-icon[name='menu']");
const closeIcon = document.querySelector(".close ion-icon[name='close']");
const navLinks=document.querySelector(".nav-links");
const body = document.body;

menuIcon.addEventListener("click",()=>{
  navLinks.classList.toggle("show-menu")
  body.classList.toggle("menu-open");
  
  menuIcon.parentElement.classList.toggle("hidden");
  closeIcon.parentElement.classList.toggle("hidden");
})
closeIcon.addEventListener("click",()=>{
  navLinks.classList.toggle("show-menu")
  body.classList.toggle("menu-open");
  menuIcon.parentElement.classList.toggle("hidden");
  closeIcon.parentElement.classList.toggle("hidden");
})

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".about",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      // markers: true,
      pin: true,
      endTrigger: "#last"
  },
  
})
tl2.to(".aleftele", {
      y: "-200%"
  
})    




gsap.to(".slide", {
    scrollTrigger: {
        trigger: ".projects",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
        // markers:true
    },
    xPercent: "-300",
    ease: Power4
});


gsap.from(".language",{
  scrollTrigger:{
    trigger:".skills",
    // markers:true,
    start:"top top",
    end:"bottom bottom",
    scrub:2
  },
  y:-18,
  opacity:0,
  duration:2,
  stagger:2
})



var tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".funzone",
      start: "50% 50%",
      end: "100% 50%",
      scrub: 1,
      // markers: true,
      pin: true,
  },
  
})
tl.
to(".top", {
  top: "-50%"
  
},'a') 
.to(".bottom", {
  bottom: "-50%"
},'a') 