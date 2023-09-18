const nav = document.querySelector(".nav");

window.addEventListener("scroll", function () {
  nav.classList.toggle("active", window.scrollY > 0);
});


//Nav Menu
const menu = document.querySelector(".menu");
const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu");

function toggleMenu() {
  menu.classList.toggle("menu_opened");
}

openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

//Sobre el selection de menu
const menuLinks = document.querySelectorAll('.nav-links a[href^="#"]')

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const id = entry.target.getAttribute("id");
    const menuLink = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (entry.isIntersecting) {
        document.querySelector("nav-links a.selected").classList.remove("selected")
      menuLink.classList.add("selected");
    }
  });
}, { rootMargin: '-50% 0px -50px 0px'});

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener("click", function () {
    menu.classList.remove("menu_opened");
  });

  const hash = menuLink.getAttribute("href");
  const target = document.querySelector(hash);
  if (target) {
    observer.observe(target);
  }
});
