import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from 'lenis'

const lenis = new Lenis({
    lerp:0.05
});


function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);


gsap.registerPlugin(ScrollTrigger);

var tl=gsap.timeline({
    scrollTrigger:{
        scroller:"body",
        trigger:".page1",
        scrub:1,
        pin:true,
        // markers:true
    }
})
tl.to(".imgdiv",{
    transform:"rotateX(12deg)",
},'a')
tl.to(".imgdiv",{
    width:"100%",
    height:"100%",
},'a')
// tl.to(".imgdiv",{
//     scale:.8
// })
// tl.to(".")

gsap.to(".page2-wrapper",{
    xPercent:"-410",
    
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:3,
        start:"top top",
        end:"+200% top",
        pin:true,
        // markers:true
    }
})


// const video = document.getElementById('scrollVideo');

//     // Ensure video metadata is loaded before accessing duration
//     video.addEventListener('loadedmetadata', () => {
//       // Create a GSAP animation tied to ScrollTrigger
//       gsap.to(video, {
//         currentTime: video.duration, // Animate from 0 to the video's duration
//         ease: "none", // Linear animation for smooth video playback
//         scrollTrigger: {
//           trigger: ".page3", // The scrollable area
//           scroller:"body",
//           start: "top top", // Start when the top of the page reaches the top of the viewport
//           end: "bottom top", // End when the bottom of the page reaches the top of the viewport
//           pin: true, // Pin the video to the viewport
//           scrub: true, // Smooth scrubbing effect
//         },
//       });
//     });
// document.querySelectorAll(".text-content").forEach(function(e){
// var dataclass=e.getAttribute("data-classvalue");
// })

function animateTextContentByAttribute(attributeName) {
    const pages = document.querySelectorAll(`[data-page]`);
    pages.forEach(page => {
        const pageSelector = `${page.getAttribute("data-page")}`;
        gsap.from(`${pageSelector} .text-content h1`, {
            y: 120,
            // stagger: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: pageSelector,
                scroller: 'body',
                start: 'top 5%',
                end: 'top 10%',
                scrub: 2,
                // markers: true // Set to false in production
            }
        });
    });
}

// Call the function with the attribute name
animateTextContentByAttribute('data-page');


function cursor(){
    window.addEventListener("mousemove",function(e){
        gsap.to(".innercursor,.cursor",{
            x:e.clientX,
            y:e.clientY,
            opacity:1,
            // ease:"expo.inOut",
            stagger:.04,
            // duration:.2
        })
    })
}
cursor()

document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseenter",function(elem){
        gsap.to(".cursor",{
            scale:7
        })
    })
})
document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseleave",function(elem){
        gsap.to(".cursor",{
            scale:1
        })
    })
})