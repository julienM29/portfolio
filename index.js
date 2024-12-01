let isMobile = window.matchMedia("(max-width: 768px)").matches;
gsap.registerPlugin(ScrollTrigger);

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
    trigger: isMobile ? "#apprenez" : "#about",
    start: isMobile ? "top 85%" : "top 45%", // Mobile vs Desktop
  },
  opacity: 0,
  x: -100,
  duration: 1,
  ease: "power2.out",
});
// Animation sur la partie compétences
gsap.from("#competences", {
  scrollTrigger: {
    trigger: isMobile ? "#competences" : "#about",
    start: isMobile ? "top 85%" : "top 45%", // Mobile vs Desktop
  },
  opacity: 0,
  x: isMobile ? -100 : 100,
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

var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = '';
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.querySelector('.wrap').textContent = this.txt;

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) { delta /= 2; }

  if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
  } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500; // Délais avant de recommencer
  }

  setTimeout(function () {
      that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementById('typewrite');
  var toRotate = elements.getAttribute('data-type');
  var period = elements.getAttribute('data-period');
  if (toRotate) {
      new TxtType(elements, JSON.parse(toRotate), period);
  }
};

const card_open_event = document.getElementById('card_open_event')
const card_close_event = document.getElementById('card_close_event')
const card_panel_event = document.getElementById('card_panel_event')
const card_open_pizzeria = document.getElementById('card_open_pizzeria');
const card_close_pizzeria = document.getElementById('card_close_pizzeria');
const card_panel_pizzeria = document.getElementById('card_panel_pizzeria');
const backdrop_pizzeria = document.getElementById('backdrop_pizzeria');
const backdrop_evenementiel = document.getElementById('backdrop_evenementiel');

function modalState(card_open, card_panel) {
    if (card_panel.classList.contains('hidden')) {
        card_panel.classList.remove('hidden');
        card_panel.classList.add('block');

        card_open.classList.add('hidden');
        card_open.classList.remove('block');

        card_panel.classList.add('card_open');
    } else {
        card_panel.classList.add('hidden');
        card_panel.classList.remove('block');

        card_open.classList.remove('hidden');
        card_open.classList.add('block');

        card_panel.classList.remove('card_open');
    }
}

card_open_pizzeria.addEventListener('click', function () {
    modalState(card_open_pizzeria, card_panel_pizzeria);
});

card_close_pizzeria.addEventListener('click', function () {
    modalState(card_open_pizzeria, card_panel_pizzeria);
});
card_open_event.addEventListener('click', function () {
  modalState(card_open_event, card_panel_event);
});

card_close_event.addEventListener('click', function () {
  modalState(card_open_event, card_panel_event);
});
backdrop_pizzeria.addEventListener('click', function () {
    if (!card_panel_pizzeria.classList.contains('hidden')) {
        modalState(card_open_pizzeria, card_panel_pizzeria);
    }
});
backdrop_evenementiel.addEventListener('click', function () {
  if (!card_panel_event.classList.contains('hidden')) {
      modalState(card_open_event, card_panel_event);
  }
});