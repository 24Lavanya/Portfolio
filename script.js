// // Define scrollTrigger for the timeline
// var tl=gsap.timeline({
//     scrollTrigger: {
//         trigger: ".main",
//         // markers: true,
//         start: "50% 50%",
//         end:"100% 50%",
//         scrub: true,
//         pin: true
//     }
// })

// tl.to(".top", {
//     top: "-100%",
//     duration:1
//     },'a')
// .to(".bottom", {
//     bottom: "-100%",
//     duration: 1,
//     display:"none"
// },'a')
// .to(".toph", {
//     top: "90%"
// },'a')
// .to(".bottomh", {
//     top: "-50%"
// },'a');

// Define scrollTrigger for .aleftele

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




// gsap.to(".images", {
//     scrollTrigger: {
//         trigger: ".aright",
//         pin: true,
//         start: "50% 50%",
//         // end: "bottom bottom",
//         scrub: 1,
//         endTrigger: "#last"
//     },
//     y: "-200%",
//     ease: "power1"
// });
