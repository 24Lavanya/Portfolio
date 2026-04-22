import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function usePortfolioAnimations() {
  useEffect(() => {
    const aboutTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".about",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
        pin: true,
        endTrigger: "#last",
      },
    });

    aboutTimeline.to(".aleftele", {
      y: "-200%",
    });

    gsap.to(".slide", {
      scrollTrigger: {
        trigger: ".projects",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
      xPercent: "-300",
      ease: "power4",
    });

    gsap.from(".language", {
      scrollTrigger: {
        trigger: ".skills",
        start: "top top",
        end: "bottom bottom",
        scrub: 2,
      },
      y: -18,
      opacity: 0,
      duration: 2,
      stagger: 2,
    });

    const funzoneTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".funzone",
        start: "50% 50%",
        end: "100% 50%",
        scrub: 1,
        pin: true,
      },
    });

    funzoneTimeline
      .to(
        ".top",
        {
          top: "-50%",
        },
        "a",
      )
      .to(
        ".bottom",
        {
          bottom: "-50%",
        },
        "a",
      );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      aboutTimeline.kill();
      funzoneTimeline.kill();
    };
  }, []);
}
