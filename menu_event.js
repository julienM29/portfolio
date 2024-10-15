function setup() {
    return {
        openMenu: false,  
        activeSection: 0, 
        activeFeature: 0, 
        sections: ["Gestion des évènements", "Système de discussion", "Système de notification"],
        features: [
            ["Ajouter ou modifier un évènement", "Trier les évènements", "Détail d'un évènement", "Participations", "Évaluations"],
            ["Messagerie et discussion"],
            ["Notifications de messagerie", "Notifications d'évènements"],
        ],
        setActiveSection(index) {
            this.activeSection = index;
            this.activeFeature = 0; 
        },
        setActiveFeature(index) {
            this.activeFeature = index; 
        }
    };
}