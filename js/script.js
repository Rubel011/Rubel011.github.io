


/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 1000,
  delay: 100,
  reset: true,
});

// sr.reveal(".home__data, .about__img, .skills__subtitle, .skills__text", {});
// sr.reveal(".home-img, .about__subtitle, .about__text, .skills__img", {
//   delay: 100,
// });
// sr.reveal(".home__social-icon", { interval: 100 });
// sr.reveal(".skills__data, .work__img, .contact__input", { interval: 50 });

/*SCROLL HOME*/
sr.reveal(".home-title", {});
// sr.reveal( ".button", { delay: 100 } );
sr.reveal(".home-img", { interval: 200 });
sr.reveal(".home-social-icon", { interval: 100 });

/*SCROLL ABOUT*/
sr.reveal(".about-img", {});
sr.reveal(".about-subtitle", { delay: 100 });
sr.reveal(".about-text", { delay: 100 });

// Scross main skills mainskills
sr.reveal(".mainskills", { interval: 50 });
sr.reveal(".mskill-img", { delay: 50 });
sr.reveal(".mskill-text", { delay: 50 });

/*SCROLL SKILLS*/
sr.reveal(".skills-subtitle", {});
sr.reveal(".skills-text", {});
sr.reveal(".skills-data", { interval: 50 });
sr.reveal(".contact-input", { interval: 100 });

// scroll github section
sr.reveal("#github-top-langs,#github-stats-card,#github-streak-stats", {interval: 50});

document.querySelector("#resume-button-1").addEventListener("click", () => {
  window.open(
    "https://drive.google.com/file/d/1NB33EV8fyFEyqE2YpketzAROuZfDS_WH/view?usp=sharing"
  );
});


var typing = new Typed(".text", {
  strings: ["FullStack Web", "Developer", "NodeJs Backend", "Developer"],
  typeSpeed: 90,
  backSpeed: 85,
  loop: true,
});

// 1st
function resumeClick1() {
  window.open(
    "https://drive.google.com/file/d/1NB33EV8fyFEyqE2YpketzAROuZfDS_WH/view?usp=sharing"
  );
}
// 2nd
function resumeClick2() {
  window.open(
    "https://drive.google.com/file/d/1NB33EV8fyFEyqE2YpketzAROuZfDS_WH/view?usp=sharing"
  );
}


const all_non_ai_project = [{
  img_url: "./Assets/images/Projects/airmeet.PNG",
  project_title: "Airmeet: Video chat app",
  project_description: "Airmeet is a real-time video chat app that allows users to create video chat rooms and communicate with each other in real-time through text, voice and video.",
  project_tech_stack: [{ name: "Html", "color": "#91311c" },{ name: "Css", "color": "#50a2ff" },{ name: "JavaScript", "color": "#e1cd55" },{ name: "Node.js", "color": "#26ac72" },{ name: "Express.js", "color": "#91311c" },{ name: "MongoDb", "color": "#50a2ff" },{ name: "Agora API", "color": "#e1cd55" }],
  project_github: "https://github.com/Rubel011/Air-Meet-Video-Chat-app", project_frontend_url: "https://airmeetup.netlify.app/"

},
{
  img_url: "./Assets/images/Projects/crystaline.png",
  project_title: "Crystaline: E-commerce-website",
  project_description: "It is an e-commerce website that provides jewelries like rings and earrings to both men and women. It was an collaborative project built within a span of five days and I led the team.",
  project_tech_stack: [{ name: "Html", "color": "#91311c" },{ name: "Css", "color": "#50a2ff" },{ name: "JavaScript", "color": "#e1cd55" },{ name: "Mock API", "color": "#91311c" }],
  project_github: "https://github.com/Rubel011/Crystaline_e-commerce_jewellery-website", project_frontend_url: "https://crystaline.vercel.app/"

},
{
  img_url: "./Assets/images/Projects/buffer.jpg",
  project_title: "Social-Savant: Grow-socially",
  project_description: "It helps people and businesses to grow in social medias. It was a solo project project built within a span of five days.",
  project_tech_stack: [{ name: "Html", "color": "#91311c" },{ name: "Css", "color": "#50a2ff" },{ name: "JavaScript", "color": "#e1cd55" },{ name: "Node.js", "color": "#26ac72" },{ name: "Express.js", "color": "#91311c" },{ name: "MongoDb", "color": "#50a2ff" }],
  project_github: "https://github.com/Rubel011/Social-Savant_grow-socially", project_frontend_url: "https://socialsavant.vercel.app/"

},
{
  img_url: "./Assets/images/Projects/tripVilla.jpg",
  project_title: "Crystaline: E-commerce-website",
  project_description: "It is an e-commerce website that provides jewelries like rings and earrings to both men and women. It was an collaborative project built within a span of five days and I led the team.",
  project_tech_stack: [{ name: "Html", "color": "#91311c" },{ name: "Css", "color": "#50a2ff" },{ name: "JavaScript", "color": "#e1cd55" }],
  project_github: "https://github.com/Rubel011/Trippora_Hotel-rent-website", project_frontend_url: "https://trippora.vercel.app/"

}
]
const all_ai_project = [{
  img_url: "./Assets/images/Projects/roamstay2.jpg",
  project_title: "roamStay: Discover Your Perfect Stay, Anywhere.",
  project_description: "Welcome to our platform. Your journey starts here, with comfortable stays for work or leisure. Discover unique accommodations, from cozy cottages to luxurious villas, and book your next adventure in comfort and style",
  project_tech_stack: [{ name: "Html", "color": "#91311c" },{ name: "Css", "color": "#50a2ff" },{ name: "JavaScript", "color": "#e1cd55" },{ name: "Python", "color": "#26ac72" },{ name: "Flask", "color": "#91311c" },{ name: "MongoDb", "color": "#50a2ff" },{ name: "Generative-AI ", "color": "#91311c" }],
  project_github: "https://github.com/Rubel011/RoamStay-Vacation_Rental_Platform", project_frontend_url: "https://vacation-rental-platform-kappa.vercel.app/"

}]


const non_ai_project_container = document.getElementById("non-ai-project-container")
non_ai_project_container.innerHTML = make_project_card_using_data(all_non_ai_project)
const ai_project_container = document.getElementById("ai-project-container")
ai_project_container.innerHTML = make_project_card_using_data(all_ai_project)

/*SCrool Project section */
sr.reveal(".project-card", {interval:50});
sr.reveal(".project-img,.project-title,.project-subtitle,.project-tech-stack,.project-btns", {interval:50});


function make_project_card_using_data(project_data) {
  const data = project_data.map((data) => {
    return create_project_card(data.img_url, data.project_title, data.project_description,
      create_tech_stack(data.project_tech_stack), data.project_github, data.project_frontend_url)


  })
  return data.join("")
}

function create_tech_stack(d) {
  const data = d.map((e) => {
    return `<p class="tech-stack tech-stack-${e.name}" style="color: ${e.color} ;">#${e.name}</p>
    `
  })
  return data.join("")
}



function create_project_card(img_url, project_title, project_description, project_tech_stack, project_github, project_frontend_url) {
  return `
  <div class="project-card">
    <img class="project-img" src=${img_url} alt="Project Image" />
    <p class="project-title">${project_title}</p>
    <div class="project-subtitle project-description">
      ${project_description}
    </div>
    <div class="project-tech-stack">
      ${project_tech_stack}
    </div>

    <div class="project-btns">
      <a href=${project_github} target="_blank"
        class="small-btn button project-github-link">
        Code&nbsp;&nbsp;<i class="bx bxl-github"></i>
      </a>
      <a href=${project_frontend_url} target="_blank" class="small-btn button project-deployed-link">
        Live&nbsp;&nbsp;<i class="bx bxl-netlify"></i>
      </a>
    </div>
  </div>`
}