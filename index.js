//get selected and targeted elements
let hamburgerIcon = document.querySelector('.hamburger-icon')
let hamburgerImage = document.querySelector('.hamburger-image')
let closeIcon = document.querySelector('.close-icon');
let mobileNav = document.querySelector('.mobile-nav');


//add an event listener to the hamburger menu that runs a function for the mobile nav bar to be displayed 
hamburgerIcon.addEventListener("click", showNavBar);

//function that shows the mobile nav bar on the screen
function showNavBar() {
    hamburgerIcon.classList.add("hidden");
    closeIcon.classList.remove("hidden");
    mobileNav.classList.add("flex");
    mobileNav.classList.remove("hidden");
}

//add event listener to the close icon to run a function that hides the nav bar 
closeIcon.addEventListener('click', hideNavBar)

//function that hides the navbar
function hideNavBar() {

    closeIcon.classList.add("hidden")
    hamburgerIcon.classList.remove("hidden");

    mobileNav.classList.remove("flex");
    mobileNav.classList.add("hidden");
}

//adding event listeners to the mobile nav bar's list items

//get the mobile nav bar
const list = document.getElementById("my-list");

//function to remove the mobile nav bar once items has been clicked

function removeMobileNav(event) {
    if(event.target.classList.contains('nav-links')) {
        hideNavBar();
    }
};

//create the addlistner and apply the function removeMoibleNav

list.addEventListener('click', removeMobileNav);