// Enregistrement du plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// Animation d'entrée pour le titre
gsap.from(".title", {
  duration: 3.5,  // Rendre l'animation plus longue
  opacity: 0,   // Commencer à une opacité nulle
  y: -50,       // Déplacement vertical
  scale: 0.8,   // Ajoute une légère réduction de taille au départ
  ease: "power3.out",  // Une animation fluide
});



