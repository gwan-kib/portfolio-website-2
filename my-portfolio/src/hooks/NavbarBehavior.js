import { useEffect } from 'react';

export default function NavbarBehavior() {
  useEffect(() => {
    const navbar = document.getElementById('navbar');
    const artMenuButton = document.getElementById('art-menu-button');
    const artMenu = document.getElementById('art-menu');

    if (!navbar) return;

    const handleScroll = () => {
      if (window.scrollY > 88) {
        navbar.classList.add('shrink');
      } else {
        navbar.classList.remove('shrink');
      }
    };

    const handleNavbarEnter = () => {
      if (navbar.classList.contains('shrink')) {
        navbar.classList.remove('shrink');
      }
      document.body.style.overflow = 'hidden';
    };

    const handleNavbarLeave = () => {
      document.body.style.overflow = '';
      if (window.scrollY > 88 && !navbar.classList.contains('shrink')) {
        navbar.classList.add('shrink');
      }
    };

    window.addEventListener('scroll', handleScroll);
    navbar.addEventListener('mouseenter', handleNavbarEnter);
    navbar.addEventListener('mouseleave', handleNavbarLeave);

    const cleanup = [];

    if (artMenuButton && artMenu) {
      const handleMenuButton = (event) => {
        event.stopPropagation();
        artMenu.classList.toggle('open');
      };

      const handleDocumentClick = (event) => {
        if (!artMenuButton.contains(event.target) && !artMenu.contains(event.target)) {
          artMenu.classList.remove('open');
        }
      };

      const handleDocumentMouseMove = () => {
        if (navbar.classList.contains('shrink') || (!navbar.matches(':hover') && !navbar.classList.contains('shrink'))) {
          artMenu.classList.remove('open');
        }
      };

      const handleDocumentScroll = () => {
        artMenu.classList.remove('open');
      };

      artMenuButton.addEventListener('click', handleMenuButton);
      document.addEventListener('click', handleDocumentClick);
      document.addEventListener('mousemove', handleDocumentMouseMove);
      document.addEventListener('scroll', handleDocumentScroll);

      cleanup.push(() => {
        artMenuButton.removeEventListener('click', handleMenuButton);
        document.removeEventListener('click', handleDocumentClick);
        document.removeEventListener('mousemove', handleDocumentMouseMove);
        document.removeEventListener('scroll', handleDocumentScroll);
      });
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      navbar.removeEventListener('mouseenter', handleNavbarEnter);
      navbar.removeEventListener('mouseleave', handleNavbarLeave);
      document.body.style.overflow = '';
      cleanup.forEach(fn => fn());
    };
  }, []);
}