let hamburgerIcon = document.querySelector('.hamburger-icon')
let hamburgerImage = document.querySelector('.hamburger-image')
let closeIcon = document.querySelector('.close-icon');
let mobileNav = document.querySelector('.mobile-nav');

hamburgerIcon.addEventListener("click", showNavBar);

function showNavBar() {
    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    mobileNav.classList.add("flex");
    mobileNav.classList.remove("hidden");
}

closeIcon.addEventListener('click', hideNavBar)

function hideNavBar() {

    closeIcon.classList.add("hidden")
    hamburgerIcon.classList.remove("hidden");

    mobileNav.classList.remove("flex");
    mobileNav.classList.add("hidden");
}