import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ScrollToTop from './components/ScrollToTop';
import './styles/general-styles.css';
import './styles/navbar-styles.css';
import { useLocation } from 'react-router-dom';

const MainPage = lazy(() => import('./webpages/MainPage'));
const ResumePage = lazy(() => import('./webpages/ResumePage'));
const ProjectsPage = lazy(() => import('./webpages/ProjectsPage'));
const ArtPersonalPage = lazy(() => import('./webpages/ArtPersonalPage'));
const ArtCommissionsPage = lazy(() => import('./webpages/ArtCommissionsPage'));

function AppRoutes() {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={<div style={{ padding: '2rem', color: 'white' }}>Loading...</div>}>
      <Routes key={location.pathname}>
        <Route path="/" element={<MainPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/art/personal" element={<ArtPersonalPage />} />
        <Route path="/art/commissions" element={<ArtCommissionsPage />} />
        <Route path="*" element={<div style={{ padding: '2rem', color: 'white'}}>Page not found</div>} />
      </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;