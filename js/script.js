const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Open and close mobile menu
menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("active");

    menuToggle.textContent = isOpen ? "✕" : "☰";
    menuToggle.setAttribute("aria-expanded", isOpen);
});

// Close menu when a navigation link is clicked
const navItems = navLinks.querySelectorAll("a");

navItems.forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("active");

        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-expanded", "false");
    });
});


// Skills data

const skillData = [
    {
        category: "Frontend Development",
        skills: ["HTML", "CSS", "JavaScript", "Bootstrap"]
    },
    {
        category: "Programming",
        skills: ["Python", "C"]
    },
    {
        category: "Database & Tools",
        skills: ["SQL", "Git", "GitHub"]
    },
    {
        category: "Emerging Technologies",
        skills: ["AI/ML", "Generative AI"]
    }
];

const skillsContainer = document.getElementById("skillsContainer");

skillData.forEach(function (item, index) {

    const skillCard = document.createElement("div");

    skillCard.classList.add("skill-card");

    // AOS animation settings
    skillCard.setAttribute("data-aos", "fade-up");
    skillCard.setAttribute("data-aos-delay", index * 100);
    skillCard.setAttribute("data-aos-duration", "800");

    const skillTags = item.skills.map(function (skill) {
        return `<span class="skill-tag">${skill}</span>`;
    }).join("");

    skillCard.innerHTML = `
        <h3>${item.category}</h3>
        <div class="skill-list">
            ${skillTags}
        </div>
    `;

    skillsContainer.appendChild(skillCard);
});

// Initialize AOS
AOS.init({
    duration: 800,
    once: true,
    offset: 100,
    easing: "ease-out-cubic"
});

// Projects Data
const projectData = [
    {
        title: "Personal Portfolio",
        description: "A personal portfolio website to showcase my skills, education and development journey.",
        technologies: ["HTML", "CSS", "JavaScript"],
        status: "In Progress",
        demo: "",
        github: ""
    },
    {
        title: "Prompttrase",
        description: "Gen AI prompt experimentation and evaluation assistant built with Python.",
        technologies: ["Python", "Generative AI"],
        status: "In Progress",
        demo: "",
        github: ""
    }
];


// Display Projects
const projectsContainer = document.getElementById("projectsContainer");

projectData.forEach(function(project, index) {

    const projectCard = document.createElement("div");
    projectCard.classList.add("project-card");

    projectCard.setAttribute("data-aos", "fade-up");
    projectCard.setAttribute("data-aos-delay", index * 150);

    const technologyTags = project.technologies.map(function(tech) {
        return `<span class="project-tech">${tech}</span>`;
    }).join("");

    projectCard.innerHTML = `
        <div class="project-preview">
            <span class="preview-label">PROJECT PREVIEW</span>
            <div class="preview-window">
                <div class="preview-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div class="preview-lines">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
        <div class="project-content">

            <div class="project-top">
                <span class="project-number">0${index + 1}</span>
                <span class="project-status">${project.status}</span>
            </div>

            <h3>${project.title}</h3>

            <p>${project.description}</p>

            <div class="project-technologies">
                ${technologyTags}
            </div>

            <div class="project-links">
                <a href="${project.demo || '#'}"
                   class="project-link ${project.demo ? '' : 'disabled-link'}"
                   ${project.demo ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true"'}
                   ${project.demo ? '' : 'tabindex="-1"'}>
                   Live Demo ↗
                </a>

                <a href="${project.github || '#'}"
                   class="project-link ${project.github ? '' : 'disabled-link'}"
                   ${project.github ? 'target="_blank" rel="noopener noreferrer"' : 'aria-disabled="true"'}
                   ${project.github ? '' : 'tabindex="-1"'}>
                   Source Code ↗
                </a>
            </div>

        </div>
    `;

    projectsContainer.appendChild(projectCard);

});


// Internship Experience Data
const internshipData = [
    {
        title: "IoT Internship",
        company: "ARDENT Computech",
        duration: "7 Days",
        description: "Worked on a Smart Street Lighting System using IoT sensors, hardware components and automation.",
        technologies: ["IoT", "Sensors", "Automation"],
        certificateImage: "",
        certificateLink: ""
    },
    {
        title: "Android Development Internship",
        company: "ARDENT Computech",
        duration: "7 Days",
        description: "Worked on an Android News App using Java, including news categories and API-based news fetching.",
        technologies: ["Java", "Android", "API"],
        certificateImage: "",
        certificateLink: ""
    },
    {
        title: "Data Analysis Internship",
        company: "ARDENT Computech",
        duration: "10 Aug 2025 – 10 Nov 2025",
        description: "Completed an internship in Data Analysis at ARDENT Computech.",
        technologies: ["Data Analysis"],
        certificateImage: "",
        certificateLink: ""
    }
];


// Display Internship Cards
const experienceContainer = document.getElementById("experienceContainer");

internshipData.forEach(function(internship, index) {

    const experienceCard = document.createElement("div");
    experienceCard.classList.add("experience-card");

    experienceCard.setAttribute("data-aos", "fade-up");
    experienceCard.setAttribute("data-aos-delay", index * 150);

    const technologyTags = internship.technologies.map(function(tech) {
        return `<span class="experience-tech">${tech}</span>`;
    }).join("");

    // Certificate image or link
    let certificateContent = "";

    if (internship.certificateImage) {
        certificateContent = `
            <a href="${internship.certificateImage}"
               target="_blank"
               rel="noopener noreferrer"
               class="certificate-image-link">
                <img src="${internship.certificateImage}"
                     alt="${internship.title} Certificate">
            </a>
        `;
    }

    if (internship.certificateLink) {
        certificateContent += `
            <a href="${internship.certificateLink}"
               target="_blank"
               rel="noopener noreferrer"
               class="certificate-link">
                View Certificate ↗
            </a>
        `;
    }

    if (!internship.certificateImage && !internship.certificateLink) {
        certificateContent = `
            <span class="certificate-pending">
                Certificate will be added soon
            </span>
        `;
    }

    experienceCard.innerHTML = `
        <div class="experience-content">

            <div class="experience-top">
                <span class="experience-number">0${index + 1}</span>
                <span class="experience-duration">${internship.duration}</span>
            </div>

            <h3>${internship.title}</h3>

            <h4>${internship.company}</h4>

            <p>${internship.description}</p>

            <div class="experience-technologies">
                ${technologyTags}
            </div>

            <div class="certificate-section">
                <h5>Certificate</h5>
                ${certificateContent}
            </div>

        </div>
    `;

    experienceContainer.appendChild(experienceCard);

});


// Contact Form Validation

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("contactName").value.trim();
    const email = document.getElementById("contactEmail").value.trim();
    const subject = document.getElementById("contactSubject").value.trim();
    const message = document.getElementById("contactMessage").value.trim();

    // Check empty fields
    if (!name || !email || !subject || !message) {
        formMessage.textContent = "Please fill in all fields.";
        return;
    }

    // Check name length
    if (name.length < 2) {
        formMessage.textContent = "Please enter a valid name.";
        return;
    }

    // Check email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        formMessage.textContent = "Please enter a valid email address.";
        return;
    }

    // Check message length
    if (message.length < 10) {
        formMessage.textContent = "Message must contain at least 10 characters.";
        return;
    }

    // Validation successful
    formMessage.textContent = "Form validated successfully! Email sending will be enabled soon.";

    formFormReset();
});

function formFormReset() {
    contactForm.reset();
}


// Dynamic Copyright Year
const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();
