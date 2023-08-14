const nav = document.querySelector("nav");
const header = document.querySelector('header');
const gallery1 = document.querySelector(".gallery .gallery-txt");
const gallery2 = document.querySelector(".gallery:nth-child(2) .gallery-txt");

window.addEventListener("scroll", () => {
    (window.scrollY || window.pageYOffset) > 0 ? nav.classList.add("nav-bg-toggle") : nav.classList.remove("nav-bg-toggle");

    window.scrollY > header.offsetHeight-300 ?
    gallery1.classList.add("text-toggle"):gallery1.classList.remove("text-toggle")

    window.scrollY > (header.offsetHeight + gallery2.offsetHeight)-100 ?
    gallery2.classList.add("text-toggle"):gallery2.classList.remove("text-toggle")

});


const hamburger = document.querySelector('.hamburger'),
    menu = document.querySelector('.m-menu'),
    menus = document.querySelectorAll('.m-menu a');

let isClicked = false;

hamburger.addEventListener('click', toggleMenu)
menus.forEach(m => {
    m.addEventListener('click', toggleMenu)
})

function toggleMenu() {
    isClicked = !isClicked
    if(isClicked) {
        menu.setAttribute('style', "height: 300px; padding: 2rem 1rem;")
    } else 
        menu.setAttribute('style', "height: 0%; padding: 0;")
}