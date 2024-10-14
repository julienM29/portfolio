const burgerButton = document.getElementById('burger-button');
const mobileMenu = document.querySelector('.mobile-menu');

burgerButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

document.getElementById('homeButton').addEventListener('click', () => hiddenMenuBurger())
document.getElementById('aboutButton').addEventListener('click', () => hiddenMenuBurger())
document.getElementById('projetButton').addEventListener('click', () => hiddenMenuBurger())
document.getElementById('contactButton').addEventListener('click', () => hiddenMenuBurger())
function hiddenMenuBurger() {
    let menu = document.getElementById('burger-button');
    menu.click()
}