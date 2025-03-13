const nav = document.querySelector("nav");
const svg = document.getElementById("hamburger-btn");

function openMobileNav() {
    nav.classList.remove("display-none");
}

function closeMobileNav() {
    nav.classList.add("display-none");
}

//todo: close it