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
//     scale:.8,
// })
// tl.to(".")

gsap.to(".page2-wrapper",{
    xPercent:"-200",
    
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
gsap.to("#circle1",{
    rotation:-90,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:2,
        start:"top top",
        end:"80% bottom",
        // markers:true
    }
})
gsap.to("#circle2",{
    rotation:-45,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:2,
        start:"10% top",
        end:"80% bottom",
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
            y: 160,
            // stagger: 0.2,
            duration: 1,
            scrollTrigger: {
                trigger: pageSelector,
                scroller: 'body',
                start: 'top 50%',
                end: 'top 60%',
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
        gsap.to(".cursor",{
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

var cursors=document.querySelector(".cursor")
document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseenter",function(elem){
        const data=`${e.getAttribute("data-text")}`
        if(data=="null"){
            cursors.innerHTML=""
        }
        else{
            cursors.innerHTML=data
        }
        // data.value===null?cursors.innerHTML="":cursors.innerHTML=data
        // cursors.innerHTML=data
        // console.log(e.getAttribute("data-text"))
        gsap.to(".cursor",{
            scale:7
        })
    })
})
document.querySelectorAll(".cursoreffect").forEach(function(e){
    e.addEventListener("mouseleave",function(elem){
        cursors.innerHTML=""
        gsap.to(".cursor",{
            scale:1
        })
    })
})

var clutter=""
document.querySelector(".para-effect")
.textContent.split("")
.forEach(function(e){
    if(e==="") clutter+=`<span>$nbsp;</span>`
    clutter+=`<span>${e}</span>`;
})
document.querySelector(".para-effect").innerHTML=clutter;
var tl3=gsap.timeline({
    scrollTrigger:{
        trigger:".page3",
        scrub:2,
        start:"top 90%",
        end:"60% bottom",
        // pin:true,
        // markers:true
    }
});
gsap.set(".para-effect span",{
    opacity:0
})
tl3.to(".para-effect span",{
    opacity:1,
    stagger:.03,
    ease:"power4",
},'para')
tl3.from(".imgdiv",{
    height:0,
    // width:0,
    stagger:1,
    duration:2
    
},'para')

gsap.from(".videodiv",{
    scale:.7,
    scrollTrigger:{
        scroller:"body",
        trigger:".videodiv",
        start:"top 80%",
        end:"50% 70%",
        // pin:true,
        // markers:true
        scrub:1,
    }
})

document.querySelector(".menu").addEventListener("click",function(){
    var navtl=gsap.timeline()
    gsap.to(".nav",{
        right:0,
        duration:1,
        ease:"power4",
    })
    navtl.from(".nav h1",{
        x:100,
        opacity:0,
        duration:1,
        ease:"power4",
        stagger:.3,
    })
})

document.querySelector(".cross").addEventListener("click",function(){
    gsap.to(".nav",{
        right:"-40%",
        duration:1,
        ease:"power4",  
    })
})