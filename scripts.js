
// MOBILE NAVIGATION

const menuToggle = document.getElementById("menu-toggle");
const header = document.querySelector(".header");
const menuIcon = menuToggle.querySelector("i");

menuToggle.addEventListener("click", () => {

  const isOpen = header.classList.toggle("menu-open");

  menuToggle.setAttribute("aria-expanded", isOpen);

  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu"
  );

  menuIcon.classList.toggle("fa-bars", !isOpen);
  menuIcon.classList.toggle("fa-xmark", isOpen);

});


// SERVICES DROPDOWN

const servicesBtn = document.querySelector(".services-btn");
const dropdown = document.querySelector(".dropdown");

servicesBtn.addEventListener("click", () => {

  const isOpen = dropdown.classList.toggle("open");

  servicesBtn.setAttribute("aria-expanded", isOpen);

});


// CLOSE MENU WHEN A NAVIGATION LINK IS CLICKED

document.querySelectorAll(".nav-left a").forEach(link => {

  link.addEventListener("click", () => {

    header.classList.remove("menu-open");
    dropdown.classList.remove("open");

    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");

    menuIcon.classList.add("fa-bars");
    menuIcon.classList.remove("fa-xmark");

    servicesBtn.setAttribute("aria-expanded", "false");

  });

});