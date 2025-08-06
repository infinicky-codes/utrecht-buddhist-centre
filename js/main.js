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