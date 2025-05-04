// =========================================
// 1️⃣ SMOOTH SCROLLING FOR NAVIGATION LINKS
// =========================================
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");

    links.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
// ==========
// 5️⃣ Navbar
// ==========
document.addEventListener("DOMContentLoaded", () => {
    const toggleBtn = document.querySelector(".toggle-btn");
    const navbar = document.querySelector(".navbar");
  
    toggleBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });
  });
  
// =========================================
// 2️⃣ TYPING ANIMATION EFFECT
// =========================================
const typedText = document.querySelector(".typing-text");
const words = ["Web Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    let currentWord = words[wordIndex];
    let displayText = currentWord.substring(0, charIndex);
    typedText.textContent = displayText;

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 100);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 50);
    } else {
        isDeleting = !isDeleting;
        if (!isDeleting) wordIndex = (wordIndex + 1) % words.length;
        setTimeout(typeEffect, 1000);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(typeEffect, 500);
});

// =========================================
// 3️⃣ IMAGE SLIDER FOR CERTIFICATIONS
// =========================================
let currentIndex = 0;
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");
const dotsContainer = document.querySelector(".dots-container");
let autoSlideInterval;

// Create dots dynamically
slides.forEach((_, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    dot.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        showSlide(index);
        startAutoSlide(); // Restart the auto-slide after a user clicks
    });
    dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) currentIndex = 0;
    else if (index < 0) currentIndex = slides.length - 1;
    else currentIndex = index;

    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

function nextSlide() {
    showSlide(currentIndex + 1);
}

function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 4000);
}

// Start auto-slide initially
startAutoSlide();
updateDots();

// =========================================
// 4️⃣ CONTACT FORM SUBMISSION
// =========================================
document.querySelector(".contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Display success message in the form
    const successMessage = document.createElement("p");
    successMessage.textContent = "Your message has been sent successfully!";
    successMessage.style.color = "#f39c12";
    successMessage.style.textAlign = "center";

    this.appendChild(successMessage);

    setTimeout(() => {
        successMessage.remove(); // Remove message after 3 seconds
    }, 3000);

    // Clear form fields
    this.reset();
});

// =========================================
// 5️⃣ RESUME UPLOAD PREVIEW AND DOWNLOAD
// =========================================
document.getElementById("resume-upload").addEventListener("change", function(event) {
    const file = event.target.files[0];

    if (file && file.type === "application/pdf") {
        const fileURL = URL.createObjectURL(file);
        
        // Update preview
        const preview = document.getElementById("resume-preview");
        preview.innerHTML = `<p>Uploaded: ${file.name}</p>`;

        // Update download button
        const downloadBtn = document.getElementById("resume-download");
        downloadBtn.href = fileURL;
        downloadBtn.style.display = "inline-block";
    } else {
        alert("Please upload a valid PDF resume.");
    }
});

// =========================================
// 7️⃣ SKILL BAR ANIMATION ON SCROLL
// =========================================
document.addEventListener("DOMContentLoaded", function () {
    const skillBars = document.querySelectorAll(".skill-fill");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.width = entry.target.getAttribute("data-width");
            }
        });
    }, { threshold: 0.5 }); // Trigger animation when 50% of the section is visible

    skillBars.forEach(bar => {
        observer.observe(bar);
    });
});

  

  
