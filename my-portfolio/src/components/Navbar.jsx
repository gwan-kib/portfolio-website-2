import { Link } from 'react-router-dom';
import NavbarBehavior from '../hooks/NavbarBehavior';

function Navbar() {
    NavbarBehavior();
  return (
    <div className="" id="navbar">
        <div id="navbar-leftside">
            <div className="navbar-element">
                <div className="navbar-label">
                    <img id="navbar-logo" src="/websiteLogoGold.png" alt="logo" />
                    <span className="label-text" id="name">Gwantana Kiboigo</span>
                </div>
            </div>
        </div>

        <div id="navbar-middle">
            <div className="navbar-element">
                <Link className="navbar-label" to="/">
                    <span className="material-symbols-rounded">home</span>
                    <span className="label-text">Home</span>
                </Link>
            </div>

            <div className="navbar-element">
                <Link className="navbar-label" to="/resume">
                    <span className="material-symbols-rounded">description</span>
                    <span className="label-text">Resume</span>
                </Link>
            </div>

            <div className="navbar-element">
                <Link className="navbar-label" to="/projects">
                    <span className="material-symbols-rounded">dashboard</span>
                    <span className="label-text">Projects</span>
                </Link>
            </div>

            <div className="navbar-element dropdown">
                <button className="navbar-label" id="art-menu-button">
                    <span className="material-symbols-rounded">stylus_pen</span>
                    <span className="label-text">Art</span>
                    <span className="material-symbols-rounded">arrow_downward_alt</span>
                </button>

                <div className="dropdown-menu" id="art-menu">
                    <Link className="dropdown-element art-menu-item" to="/art/personal">
                        <span className="art-menu-item-text">Personal</span>
                    </Link>
                    <Link className="dropdown-element art-menu-item" to="/art/commissions">
                        <span className="art-menu-item-text">Commissions</span>
                    </Link>
                </div>
            </div>
        </div>

        <div id="navbar-rightside">
            <span className="navbar-element">
                <div className="navbar-label">
                    <span className="label-text" id="contact-me">Contact Me</span>
                </div>
            </span>
        </div>
    </div>
  );
}

export default Navbar;
