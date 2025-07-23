// Loads in navbar whenever the div with the id, navbar-container, is present
// (so we dont have to write out all the navbar code for every page)
// Put all code for navbar INSIDE this!!!
const navbarContainer = document.getElementById("navbar-container");

if (navbarContainer) {
    fetch("/reusables/navbar.html")
        .then(res => res.text()) // turns file into text/html data
        .then(html => {
            navbarContainer.innerHTML = html; // plug navbar into navbar-container div

            const navbar = document.getElementById('navbar');

            // Shrinks navbar when scrolling
            window.addEventListener('scroll', () => {
                if (window.scrollY > 88) {
                    navbar.classList.add('shrink');
                } else {
                    navbar.classList.remove('shrink');
                }
            });

        // Unshrinks navbar when user hovers over it

        navbar.addEventListener('mouseenter', () => {
            if (navbar.classList.contains("shrink")) {
                navbar.classList.remove('shrink');
            }
        });

        // Reshrinks navbar when user leaves it
        navbar.addEventListener('mouseleave', () => {
            if (window.scrollY > 88 && !navbar.classList.contains('shrink')) {
                navbar.classList.add('shrink');
            }
        });

        // Prevents scrolling when mouse is over the navbar
        navbar.addEventListener('mouseenter', () => {
            document.body.style.overflow = 'hidden';
        });

        navbar.addEventListener('mouseleave', () => {
            document.body.style.overflow = '';
        });

        // Art dropdown menu toggle
        const artMenuButton = document.getElementById('art-menu-button');
        const artMenu = document.getElementById('art-menu');
        
        // Opens dropdown when menu button is clicked
        if (artMenuButton && artMenu) {
            artMenuButton.addEventListener('click', (event) => {
                event.stopPropagation();
                artMenu.classList.toggle('open');
            });

            // Closes menu if user clicks outside of the menu 
            document.addEventListener('click', (event) => { 
                if (!artMenuButton.contains(event.target) && !artMenu.contains(event.target)) {
                    artMenu.classList.remove('open');
                }
            });
                        
            // Closes menu if the navbar shrinks or the mouse is moved outside of the navbar
            document.addEventListener('mousemove', (event) => {
                if (navbar.classList.contains('shrink') || !navbar.matches(':hover') && !navbar.classList.contains('shrink')) {
                    artMenu.classList.remove('open');
                }
            });

            // Closes menu if user scolls
            document.addEventListener('scroll', () => {
                artMenu.classList.remove('open');
            });
        }

    })
}