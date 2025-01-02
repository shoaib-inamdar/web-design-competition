import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

gsap.to(".page2-wrapper",{
    x:"-1000",
    duration:1,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        scrub:1,
        pin:true,
        markers:true
    }
})