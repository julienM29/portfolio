// Animation pour le texte qui fade-in
gsap.to(".fade-in", {
    scrollTrigger: {
      trigger: ".fade-in",
      start: "top 45%",
      toggleActions: "play pause resume reset", // Contrôle des états de l'animation
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power1.out",
  });
  