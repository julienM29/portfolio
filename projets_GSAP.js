let isMobile = window.matchMedia("(max-width: 768px)").matches;
gsap.registerPlugin(ScrollTrigger);

// Animation d'entrée pour le titre
gsap.from(".title", {
  duration: 3.5,  // Rendre l'animation plus longue
  opacity: 0,   // Commencer à une opacité nulle
  y: -50,       // Déplacement vertical
  scale: 0.8,   // Ajoute une légère réduction de taille au départ
  ease: "power3.out",  // Une animation fluide
});

  // Animation des listes de fonctionnalités
  gsap.from(".listeFonctionnalites", {
    scrollTrigger: {
        trigger: "#introduction",
        start: isMobile ? "top 5%" : "top 22%", // Mobile vs Desktop
        toggleActions: "play none none reverse",
      },
    duration: 1.5,
    opacity: 0,
    x: -100,
    stagger: 0.3,
    ease: "power3.out",
  });
  // Animation Outils utilisés
  gsap.from(".outils", {
    scrollTrigger: {
        trigger: "#introduction",
        start: "top 0%", // Mobile vs Desktop
        toggleActions: "play none none reverse",
      },
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
  });

