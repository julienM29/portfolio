let isMobile = window.matchMedia("(max-width: 768px)").matches;
gsap.registerPlugin(ScrollTrigger);

// Animation d'entrée pour le titre
setTimeout(() => {
  gsap.from(".title", {
      duration: 2.5,
      opacity: 0,
      y: -50,
      scale: 0.8,
      ease: "power3.out",
  });
}, 300);

// Animations pour la section About
gsap.from("#about", {
  scrollTrigger: {
    trigger: "#about",
    start: isMobile ? "top 75%" : "top 60%", // Mobile vs Desktop
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
if(!isMobile){
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

}
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
  
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault(); 
    var form = event.target;
    fetch(form.action, {
        method: form.method,
        body: new FormData(form),
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Votre message a été envoyé avec succès !');
            window.location.reload();
        } else {
            alert('Une erreur est survenue lors de l\'envoi du message. Veuillez réessayer.');
        }
    }).catch(error => {
        alert('Erreur : ' + error.message);
    });
});