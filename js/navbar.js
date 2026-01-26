var hamburger = document.querySelector(".hamburger");
var navMenu = document.querySelector(".navbar-menu");
var navbar = document.querySelector(".navbar");
var navLinks = document.querySelectorAll(".nav-link:not(.resume)");

/* Toggle mobile menu */
hamburger.addEventListener("click", function () {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

/* Close menu on link click */
navLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

/* Scroll-driven .scrolled class */
window.addEventListener("scroll", function () {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* Active section highlighting */
var sections = document.querySelectorAll("section[id]");

function highlightActiveLink() {
  var scrollY = window.scrollY + 100;
  sections.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.offsetHeight;
    var sectionId = section.getAttribute("id");
    var link = document.querySelector('.nav-link[href="#' + sectionId + '"]');
    if (link) {
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    }
  });
}

window.addEventListener("scroll", highlightActiveLink);
highlightActiveLink();
