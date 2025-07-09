// Loads in navbar whenever the div with the id, navbar-container, is present
// (so we dont have to write out all the navbar code for every page)
// Put all code for navbar INSIDE this!!!
fetch("/reusables/navbar.html")
    .then(res => res.text()) // turns file into text/html data
    .then(html => {
        document.getElementById("navbar-container").innerHTML = html; // plug navbar into navbar-container div
    })
    .then (html => {

        // Shinks navbar when scrolling
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');

            if (window.scrollY > 88) {
                navbar.classList.add('shrink');
            } else {
                navbar.classList.remove('shrink');
            }
        });

        // Unshrinks navbar when user hovers over it
        const navbar = document.getElementById('navbar');
        navbar.addEventListener('mouseenter', () => {
            if (navbar.classList.contains("shrink")) {
                navbar.classList.remove('shrink');
            }
        });

        // Reshrinks navbar when user leaves it
        navbar.addEventListener('mouseleave', () => {
            if (window.scrollY > 88 && !navbar.classList.contains("shrink")) {
                navbar.classList.add('shrink');
            }
        });

    })