import { useEffect } from 'react';

function MainPage() {
  useEffect(() => {
    document.title = "Gwantana Kiboigo | Homepage";
  }, []);

  return (
     <div id="about-me-section">
      <div id="about-me-content">
        <h1 id="about-me-title">Hi, my name is Gwan</h1>
        <p id="about-me-description">
          I'm a Computer Science student at UBC Okanagan with a passion for building creative,
          functional projects. I enjoy coding, making digital art, and staying active.
          Whether it’s developing full-stack web apps or exploring new tools, I’m always
          looking to learn and improve my skills.
        </p>
      </div>
    </div>
  );
}

export default MainPage;
