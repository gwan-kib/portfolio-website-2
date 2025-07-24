import { NavLink, useLocation } from 'react-router-dom';
import NavbarBehavior from '../hooks/NavbarBehavior';

function Navbar() {
    NavbarBehavior();

    const location = useLocation();
    const artActive = location.pathname.startsWith('/art');

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
                   <NavLink className={({ isActive }) => `navbar-label${isActive ? ' active' : ''}`} to="/">
                    <span className="material-symbols-rounded">home</span>
                    <span className="label-text">Home</span>
                </NavLink>
            </div>

            <div className="navbar-element">
                <NavLink className={({ isActive }) => `navbar-label${isActive ? ' active' : ''}`} to="/resume">
                    <span className="material-symbols-rounded">description</span>
                    <span className="label-text">Resume</span>
                </NavLink>
            </div>

            <div className="navbar-element">
                <NavLink className={({ isActive }) => `navbar-label${isActive ? ' active' : ''}`} to="/projects">
                    <span className="material-symbols-rounded">dashboard</span>
                    <span className="label-text">Projects</span>
                </NavLink>
            </div>

            <div className="navbar-element dropdown">
                <button className="navbar-label" id="art-menu-button">
                    <div className={`navbar-label${artActive ? ' active' : ''}`} id="art-menu-button">
                    <span className="material-symbols-rounded">stylus_pen</span>
                    <span className="label-text">Art</span>
                    <span className="material-symbols-rounded">arrow_downward_alt</span>
                    </div>
                </button>

                <div className="dropdown-menu" id="art-menu">
                    <NavLink className={({ isActive }) => `dropdown-element art-menu-item${isActive ? ' active' : ''}`} to="/art/personal">
                        <span className="art-menu-item-text">Personal</span>
                    </NavLink>
                    <NavLink className={({ isActive }) => `dropdown-element art-menu-item${isActive ? ' active' : ''}`} to="/art/commissions">
                        <span className="art-menu-item-text">Commissions</span>
                    </NavLink>
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
