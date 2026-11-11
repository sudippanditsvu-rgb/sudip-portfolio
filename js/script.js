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
