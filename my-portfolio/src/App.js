import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './webpages/MainPage';
import ResumePage from './webpages/ResumePage';
import ProjectsPage from './webpages/ProjectsPage';
import ArtPersonalPage from './webpages/ArtPersonalPage';
import ArtCommissionsPage from './webpages/ArtCommissionsPage';
import './styles/general-styles.css';
import './styles/navbar-styles.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/art/personal" element={<ArtPersonalPage />} />
        <Route path="/art/commissions" element={<ArtCommissionsPage />} />
      </Routes>
    </Router>
  );
}

export default App;