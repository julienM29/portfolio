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
