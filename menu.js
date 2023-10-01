const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-links");
const Contact = document.querySelector(".contact-button");
const Navar = document.querySelector(".nav-links");

window.addEventListener("scroll", function () {
  var header = document.querySelector(".nav");
  // nav.classList.toggle("active", window.scrollY > 0);
  header.classList.toggle("active", window.scrollY > 0);
});

Navar.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");
});

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("nav-menu_visible");

  if (navMenu.classList.contains("nav-menu_visible")) {
    navToggle.setAttribute("aria-label", "Cerrar menú");
  } else {
    navToggle.setAttribute("aria-label", "Abrir menú");
  }
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
