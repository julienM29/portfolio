const openModal = document.getElementById('openModal');
                            const modal = document.getElementById('imageModal');

                            // Ouvre la modale quand on clique sur le bouton
                            openModal.addEventListener('click', () => {
                                modal.classList.replace('hidden', 'flex');
                            });

                            // Ferme la modale quand on clique à l'extérieur de l'image
                            modal.addEventListener('click', (e) => {
                                if (e.target === modal) {
                                    modal.classList.replace('flex', 'hidden');
                                }
                            });