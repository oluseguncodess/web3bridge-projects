let hamburgerIcon = document.querySelector('.hamburger-icon')
let hamburgerImage = document.querySelector('.hamburger-image')

hamburgerIcon.addEventListener("click", function() {
    hamburgerImage.setAttribute("src", "./images/icon-close.svg")
})
