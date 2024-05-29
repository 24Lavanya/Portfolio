

var tl2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".adiv",
      start: "top top",
      end: "bottom bottom",
      scrub: 1,
      markers: true,
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