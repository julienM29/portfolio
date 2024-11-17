const isMobile = window.matchMedia("(max-width: 768px)").matches;
gsap.from("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: isMobile ? "top 75%" : "top 50%", // Mobile vs Desktop
    toggleActions: "play none none reverse",
  },
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from("#apprenez", {
  scrollTrigger: {
    trigger: "#about",
    start: "top 45%",
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
});

gsap.from("#competences", {
  scrollTrigger: {
    trigger: "#about",
    start: isMobile ? "top 15%" : "top 45%", // Mobile vs Desktop
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
});
