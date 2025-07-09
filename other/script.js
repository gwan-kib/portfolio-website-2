 // Loads in navbar whenever the div with the id, navbar-container, is present
 // (so we dont have to write out all the navbar code for every page)
fetch("/reusables/navbar.html")
    .then(res => res.text()) // turns file into text/html data
    .then(html => {
        document.getElementById("navbar-container").innerHTML = html; // plug navbar into navbar-container div
    });
