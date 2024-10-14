function setup() {
    return {
        openMenu: false, // Pour gérer l'ouverture et la fermeture du méga-menu
        activeSection: 0, // Commence avec la première section active
        activeFeature: 0, // Commence avec la première fonctionnalité active
        sections: ["Gestion des évènements", "Système de discussion", "Système de notification"],
        features: [
            ["Ajouter ou modifier un évènement", "Trier les évènements", "Détail d'un évènement", "Participations", "Évaluations"],
            ["Messagerie et discussion"],
            ["Notifications de messagerie", "Notifications d'évènements"],
        ],
        setActiveSection(index) {
            this.activeSection = index;
            this.activeFeature = 0; // Réinitialise la fonctionnalité active à la première fonctionnalité
        },
        setActiveFeature(index) {
            this.activeFeature = index; // Met à jour la fonctionnalité active
        }
    };
}