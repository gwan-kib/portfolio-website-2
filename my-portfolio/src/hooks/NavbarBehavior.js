import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function NavbarBehavior() {

  const location = useLocation();

  useEffect(() => {
    const artMenu = document.getElementById('art-menu');
    if (artMenu) artMenu.classList.remove('open');
  }, [location]);
  
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const artMenuButton = document.getElementById('art-menu-button');
    const artMenu = document.getElementById('art-menu');

    // cleanup array for main navbar events
    const navbarCleanup = [];
    
    // for all main navbar events
    if (navbar) {

      // controls the resizing of the navbar on scroll
      const handleScroll = () => {
        if (window.scrollY > 88) {
          navbar.classList.add('shrink');
        } else {
          navbar.classList.remove('shrink');
        }
      };

      window.addEventListener('scroll', handleScroll);
      
      navbarCleanup.push(() => window.removeEventListener('scroll', handleScroll));
    }

    // cleanup array for all the art button events
    const artButtonCleanup = [];

    // for everything related to the art dropdown menu
    if (artMenuButton && artMenu) {

      // when the user clicks the page...
      const handleDocumentClick = (event) => {

        // if the art button was clicked, it toggles the dropdown menu
        if (artMenuButton.contains(event.target)) {
          event.stopPropagation();
          artMenu.classList.toggle('open');
        } else if (!artMenuButton.contains(event.target) && !artMenu.contains(event.target)) {
          // if the click was not on the art button or its dropdown, it will close the menu
          artMenu.classList.remove('open');
        }
      };

      // when the user moves the mouse...
      const handleDocumentMouseMove = () => {

        // if the user moves the mouse outside of the navbar, it will shrink
        if (navbar.classList.contains('shrink') || (!navbar.matches(':hover') && !navbar.classList.contains('shrink'))) {
          artMenu.classList.remove('open');
        }
      };

      // when the user scroll on the page...
      const handleDocumentScroll = () => {

        // the art button dropdown will close
        artMenu.classList.remove('open');
      };

      document.addEventListener('click', handleDocumentClick);
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('scroll', handleDocumentScroll);

      artButtonCleanup.push(() => document.removeEventListener('click', handleDocumentClick));
      artButtonCleanup.push(() => document.removeEventListener('mousemove', handleDocumentMouseMove));
      artButtonCleanup.push(() => document.removeEventListener('scroll', handleDocumentScroll));
    }

    return () => {
      navbarCleanup.forEach(fn => fn());
      artButtonCleanup.forEach(fn => fn());
    };
  }, []);
}
