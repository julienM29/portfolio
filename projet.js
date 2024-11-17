// GSAP Animations
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
