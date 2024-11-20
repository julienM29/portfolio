// Barre de navigation afin d'enlever l'url bizarre
document.addEventListener('DOMContentLoaded', function () {
    const link = document.querySelector('a[href^="../index.html#"]');

    link.addEventListener('click', function(event) {
        event.preventDefault(); 
        window.location.href = 'index.html';
                setTimeout(() => {
            const targetId = this.getAttribute('href').split('#')[1]; 
            const targetElement = document.getElementById(targetId); 
            
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
            history.pushState(null, null, window.location.pathname);
        }, 100); 
    });
});

let isMobile = window.matchMedia("(max-width: 768px)").matches;
gsap.registerPlugin(ScrollTrigger);

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
        trigger: "#outils",
        start: "top 85%", // Mobile vs Desktop
        toggleActions: "play none none reverse",
      },
    duration: 1.5,
    opacity: 0,
    stagger: 0.3,
    ease: "power3.out",
  });

