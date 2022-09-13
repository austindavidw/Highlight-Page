const mMenu = document.querySelector('#mobile-menu')
const mLinks = document.querySelector('.navbar__menu')
// this is to display the mobile menu
const mobileMenu = () => {
    mMenu.classList.toggle('is-active')
    mLinks.classList.toggle('active')
}

mMenu.addEventListener('click', mobileMenu); 