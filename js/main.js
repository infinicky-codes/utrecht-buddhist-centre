function toggleNav() {
    var navbar = document.getElementById("navbar-links");
    navbar.classList.toggle("show");
};

// Close menu when navigation link is clicked
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar-links");
    var links = document.querySelectorAll("#navbar-links a");
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            navbar.classList.remove("show");
        });
    });
});

// Close menu when clicked outside
document.addEventListener("click", function(event) {
    var nav = document.getElementById("navbar-links");
    var hamburger = document.querySelector(".header-main-hamburger");
    if (nav.classList.contains("show") && !hamburger.contains(event.target)) {
        nav.classList.remove("show");
    }
});

// TODO: Clean up this function
function toggleLanguage(lang) {
    var activeFlag = document.getElementById(`lang-${lang}-btn`);
    activeFlag.style.display = 'none';
    var inactiveLang = lang === 'en' ? 'nl' : 'en';
    var inactiveFlag = document.getElementById(`lang-${inactiveLang}-btn`);
    inactiveFlag.style.display = 'block';

    var enContent = document.querySelectorAll('.lang-en');
    var nlContent = document.querySelectorAll('.lang-nl');

    if (lang === 'en') {
        enContent.forEach(content => {
            if (content.id === "navbar-links") {
                // Only show if hamburger menu is open
                if (content.classList.contains("show")) {
                    content.style.display = 'block'; // For mobile
                } else {
                    content.style.display = 'none'; // For desktop
                }
            } 
            else if (content.classList.contains("contact-section")) {
                content.style.display = 'flex'; // Keep flex for contact section
            } 
            else {
                content.style.display = 'block';
            }
        });
        nlContent.forEach(content => {
            content.style.display = 'none';
        });
    } else if (lang === 'nl') {
        nlContent.forEach(content => {
            if (content.id === "navbar-links") {
                // Only show if hamburger menu is open
                if (content.classList.contains("show")) {
                    content.style.display = 'block'; // For mobile
                } else {
                    content.style.display = 'none'; // For desktop
                }
            } 
            else if (content.classList.contains("contact-section")) {
                content.style.display = 'flex'; // Keep flex for contact section
            }             
            else {
                content.style.display = 'block';
            }
        });
        enContent.forEach(content => {
            content.style.display = 'none';
        });
    }
}