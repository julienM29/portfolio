function setup() {
    return {
        openMenu: false,
        activeSection: 0, 
        activeFeature: 0, 
        sections: ["Gestion de la carte", "Gestion des utilisateurs", "Système de commande"],
        features: [
            ["Ajouter un ingrédient", "Ajouter ou modifier un produit", "Modification du stock", "Disponibilité d'un produit"],
            ["Création d'un compte", "Modification de son profil", "Gestion des utilisateurs"],
            ["Ajout au panier", "Modifier et valider son panier", "Préparation des commandes", "Livraison"],
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