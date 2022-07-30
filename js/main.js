gsap.registerPlugin(ScrollTrigger);
gsap.defaults({ ease: "none", duration: 2 });

// home panel title and text fade-in

gsap.to(".title-home", { opacity: 1, duration: 0.5 });
gsap.to(".text-home", { opacity: 1, duration: 0.5 }).delay(0.5);

// create a sequence that moves 3 of the panels in from different directions
const tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#container",
    start: "top top",
    end: "+=5000",
    scrub: 2,
    // markers: true,
    pin: true,
    anticipatePin: 1,
    snap: {
      snapTo: "labels" // snap to the closest label in the timeline
    }
  }
});

tl.to(".title-1", { opacity: 1, duration: 1 })
  .to(".text-1", { opacity: 1, duration: 1 })
  .fromTo(".big-text-1", { xPercent: -150 }, { xPercent: 150, duration: 3, opacity: 1 })
  .fromTo(".big-text-2", { xPercent: 150 }, { xPercent: -150, duration: 3, opacity: 1 })
  .addLabel("one")
  .from(".orange", { yPercent: -100 })
  .from(".left-box", { opacity: 0, duration: 0.5 })
  .from(".right-box", { opacity: 0, duration: 0.5 })
  .addLabel("two")
  .from(".purple", { xPercent: 100 })
  .addLabel("three")
  .from(".green", { yPercent: -100 })
  .addLabel("four")
  .from(".grey", { xPercent: 100 })
  .addLabel("five");
