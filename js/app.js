const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu(){
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function mobileMenuClose(){
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

const navItem = document.querySelectorAll(".nav-item");

for(var i=0; i<navItem.length; i++){
    navItem[i].addEventListener("click", mobileMenuClose)
};