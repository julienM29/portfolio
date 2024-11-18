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

// Animations pour la section About
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
// Animation pour la partie Apprenez en plus sur moi
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
// Animation sur la partie compétences
gsap.from("#competences", {
  scrollTrigger: {
    trigger: "#about",
    start: isMobile ? "top 10%" : "top 45%", // Mobile vs Desktop
  },
  opacity: 0,
  x: 100,
  duration: 1,
  ease: "power2.out",
});
// Animations pour les projets
gsap.from(".project-item", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 2.5,
    ease: "power2.out",
    scrollTrigger: {
      trigger: "#projects-container",
      start: isMobile ? "top 85%" : "top 55%", // Mobile vs Desktop
      end: "bottom top",
      toggleActions: "play none none none"
    }
  });

  // Animation des boutons au survol
  gsap.utils.toArray(".project-item a").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
      gsap.to(btn, { scale: 1.1, duration: 0.3, ease: "power2.out" });
    });
    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, { scale: 1, duration: 0.3, ease: "power2.in" });
    });
  });

  // Animation pour la partie contact
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
  
