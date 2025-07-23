import React from 'react';

function Navbar() {
  return (
    <div className="" id="navbar">
        <div id="navbar-leftside">
            <div className="navbar-element">
                <div className="navbar-label">
                    <img id="navbar-logo" src="/reusables/websiteLogoGold.png" alt="logo" />
                    <span className="label-text" id="name">Gwantana Kiboigo</span>
                </div>
            </div>
        </div>

        <div id="navbar-middle">
            <div className="navbar-element">
                <a className="navbar-label" href="/webpages/main-page.html">
                    <span className="material-symbols-rounded">home</span>
                    <span className="label-text">Home</span>
                </a>
            </div>

            <div className="navbar-element">
                <a className="navbar-label" href="/webpages/resume-page.html">
                    <span className="material-symbols-rounded">description</span>
                    <span className="label-text">Resume</span>
                </a>
            </div>

            <div className="navbar-element">
                <a className="navbar-label" href="/webpages/projects-page.html">
                    <span className="material-symbols-rounded">dashboard</span>
                    <span className="label-text">Projects</span>
                </a>
            </div>

            <div className="navbar-element dropdown">
                <button className="navbar-label" id="art-menu-button">
                    <span className="material-symbols-rounded">stylus_pen</span>
                    <span className="label-text">Art</span>
                    <span className="material-symbols-rounded">arrow_downward_alt</span>
                </button>

                <div className="dropdown-menu" id="art-menu">
                    <a className="dropdown-element art-menu-item" href="/webpages/art-personal-page.html">
                        <span className="art-menu-item-text">Personal</span>
                    </a>
                    <a className="dropdown-element art-menu-item" href="/webpages/art-commissions-page.html">
                        <span className="art-menu-item-text">Commissions</span>
                    </a>
                </div>
            </div>
        </div>

        <div id="navbar-rightside">
            <a className="navbar-element">
                <div className="navbar-label">
                    <span className="label-text" id="contact-me">Contact Me</span>
                </div>
            </a>
        </div>
    </div>
  );
}

export default Navbar;
