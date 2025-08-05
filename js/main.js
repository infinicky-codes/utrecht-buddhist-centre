function toggleNav() {
    var navbar = document.getElementById("navbar-links");
    navbar.classList.toggle("show");
}

// Close menu when navigation link is clicked
document.addEventListener("DOMContentLoaded", function() {
    var navbar = document.getElementById("navbar-links");
    var links = document.querySelectorAll("#navbar-links a");
    links.forEach(function(link) {
        link.addEventListener("click", function() {
            if (window.innerWidth <= 620) {
                navbar.classList.remove("show");
            }
        });
    });
});

// Close menu when clicked outside
document.addEventListener("click", function(event) {
    var navbar = document.getElementById("navbar-links");
    var hamburger = document.querySelector(".header-main-hamburger");
    if (
        window.innerWidth <= 620 &&
        navbar.classList.contains("show") &&
        !navbar.contains(event.target) &&
        !hamburger.contains(event.target)
    ) {
        navbar.classList.remove("show");
    }
});