/* ========== SCROLL REVEAL ========== */
const sr = ScrollReveal({
  origin: "bottom",
  distance: "40px",
  duration: 800,
  delay: 100,
  reset: false,
});

/* Hero - staggered */
sr.reveal(".hero-greeting", { delay: 100 });
sr.reveal(".home__title", { delay: 200 });
sr.reveal(".text-out", { delay: 300 });
sr.reveal(".hero-description", { delay: 400 });
sr.reveal(".hero-cta", { delay: 500 });
sr.reveal(".home__image-wrapper", { delay: 300, origin: "right" });

/* About */
sr.reveal(".about-card", { delay: 100 });

/* Skills */
sr.reveal(".skills-category", { interval: 100 });

/* GitHub */
sr.reveal("#github-top-langs", { delay: 100 });
sr.reveal("#github-stats-card, #github-streak-stats", { interval: 100 });
sr.reveal(".github-calendar-wrapper", { delay: 200 });

/* Projects */
sr.reveal(".project-card", { interval: 100 });

/* Footer */
sr.reveal(".footer-icon", { interval: 80 });

/* ========== TYPED.JS ========== */
new Typed(".text", {
  strings: ["FullStack Web Developer", "Node.js Backend Developer"],
  typeSpeed: 80,
  backSpeed: 60,
  loop: true,
});

/* ========== RESUME HANDLER ========== */
document.querySelectorAll('[download="Rubel-Foridi-Resume"]').forEach(function (el) {
  el.addEventListener("click", function () {
    window.open(
      "https://drive.google.com/file/d/1NB33EV8fyFEyqE2YpketzAROuZfDS_WH/view?usp=sharing"
    );
  });
});

/* ========== PROJECT DATA ========== */
var allNonAiProjects = [
  {
    img_url: "./Assets/images/Projects/airmeet.PNG",
    project_title: "Airmeet: Video Chat App",
    project_description:
      "Airmeet is a real-time video chat app that allows users to create video chat rooms and communicate with each other in real-time through text, voice and video.",
    project_tech_stack: [
      { name: "Html", color: "#91311c" },
      { name: "Css", color: "#50a2ff" },
      { name: "JavaScript", color: "#e1cd55" },
      { name: "Node.js", color: "#26ac72" },
      { name: "Express.js", color: "#91311c" },
      { name: "MongoDB", color: "#50a2ff" },
      { name: "Agora API", color: "#e1cd55" },
    ],
    project_github: "https://github.com/Rubel011/Air-Meet-Video-Chat-app",
    project_frontend_url: "https://airmeetup.netlify.app/",
  },
  {
    img_url: "./Assets/images/Projects/Vetspot.jpg",
    project_title: "Vetspot: Veterinary Clinic",
    project_description:
      "The Veterinary System Website is designed to streamline and optimize the operations of a veterinary clinic. It offers features such as patient management, appointment scheduling, billing and invoicing, inventory management, and reporting and analytics.",
    project_tech_stack: [
      { name: "Html", color: "#91311c" },
      { name: "Css", color: "#50a2ff" },
      { name: "JavaScript", color: "#e1cd55" },
      { name: "Node.js", color: "#26ac72" },
      { name: "Express.js", color: "#91311c" },
      { name: "MongoDB", color: "#50a2ff" },
      { name: "AWS", color: "#91311c" },
    ],
    project_github: "https://github.com/Rubel011/Vetspot_veterinary-clinic_website",
    project_frontend_url: "https://unarmed-science-115.vercel.app/",
  },
  {
    img_url: "./Assets/images/Projects/crystaline.png",
    project_title: "Crystaline: E-commerce",
    project_description:
      "It is an e-commerce website that provides jewelries like rings and earrings to both men and women. It was a collaborative project built within a span of five days and I led the team.",
    project_tech_stack: [
      { name: "Html", color: "#91311c" },
      { name: "Css", color: "#50a2ff" },
      { name: "JavaScript", color: "#e1cd55" },
      { name: "Mock API", color: "#91311c" },
    ],
    project_github: "https://github.com/Rubel011/Crystaline_e-commerce_jewellery-website",
    project_frontend_url: "https://crystaline.vercel.app/",
  },
  {
    img_url: "./Assets/images/Projects/buffer.jpg",
    project_title: "Social-Savant: Grow Socially",
    project_description:
      "It helps people and businesses to grow in social medias. It was a solo project built within a span of five days.",
    project_tech_stack: [
      { name: "Html", color: "#91311c" },
      { name: "Css", color: "#50a2ff" },
      { name: "JavaScript", color: "#e1cd55" },
      { name: "Node.js", color: "#26ac72" },
      { name: "Express.js", color: "#91311c" },
      { name: "MongoDB", color: "#50a2ff" },
    ],
    project_github: "https://github.com/Rubel011/Social-Savant_grow-socially",
    project_frontend_url: "https://socialsavant.vercel.app/",
  },
  {
    img_url: "./Assets/images/Projects/tripVilla.jpg",
    project_title: "Trippora: Hotel Rent Website",
    project_description:
      "It is a hotel rental platform that provides an easy way to discover and book accommodations. Built as a collaborative project focused on clean UI and user experience.",
    project_tech_stack: [
      { name: "Html", color: "#91311c" },
      { name: "Css", color: "#50a2ff" },
      { name: "JavaScript", color: "#e1cd55" },
    ],
    project_github: "https://github.com/Rubel011/Trippora_Hotel-rent-website",
    project_frontend_url: "https://trippora.vercel.app/",
  },
];

var allAiProjects = [
  {
    img_url: "./Assets/images/Projects/roamstay2.jpg",
    project_title: "RoamStay: Discover Your Perfect Stay",
    project_description:
      "Welcome to our platform. Your journey starts here, with comfortable stays for work or leisure. Discover unique accommodations, from cozy cottages to luxurious villas, and book your next adventure in comfort and style.",
    project_tech_stack: [
      { name: "Html", color: "#91311c" },
      { name: "Css", color: "#50a2ff" },
      { name: "JavaScript", color: "#e1cd55" },
      { name: "Python", color: "#26ac72" },
      { name: "Flask", color: "#91311c" },
      { name: "MongoDB", color: "#50a2ff" },
      { name: "Gen AI", color: "#91311c" },
    ],
    project_github: "https://github.com/Rubel011/RoamStay-Vacation_Rental_Platform",
    project_frontend_url: "https://vacation-rental-platform-kappa.vercel.app/",
  },
];

/* ========== PROJECT RENDERING ========== */
function createTechStackHTML(techStack) {
  return techStack
    .map(function (tech) {
      return '<span class="tech-stack" style="color: ' + tech.color + ';">' + tech.name + "</span>";
    })
    .join("");
}

function createProjectCard(project) {
  return (
    '<div class="project-card">' +
    '<img class="project-img" src="' + project.img_url + '" alt="' + project.project_title + '" loading="lazy" />' +
    '<p class="project-title">' + project.project_title + "</p>" +
    '<div class="project-subtitle">' + project.project_description + "</div>" +
    '<div class="project-tech-stack">' + createTechStackHTML(project.project_tech_stack) + "</div>" +
    '<div class="project-btns">' +
    '<a href="' + project.project_github + '" target="_blank" rel="noopener noreferrer" class="small-btn button project-github-link">' +
    'Code <i class="bx bxl-github"></i></a>' +
    '<a href="' + project.project_frontend_url + '" target="_blank" rel="noopener noreferrer" class="small-btn button project-deployed-link">' +
    'Live <i class="bx bx-link-external"></i></a>' +
    "</div></div>"
  );
}

function renderProjects(containerId, projects) {
  var container = document.getElementById(containerId);
  if (container) {
    container.innerHTML = projects.map(createProjectCard).join("");
  }
}

renderProjects("non-ai-project-container", allNonAiProjects);
renderProjects("ai-project-container", allAiProjects);
