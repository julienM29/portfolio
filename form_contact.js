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