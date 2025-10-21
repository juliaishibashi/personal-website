import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
// import About from './components/About';
import Skills from './components/Skills';
import Works from './components/Works';
import ProjectDetail from './components/ProjectDetail';
import Contact from './components/Contact';
import Profile from './components/Profile';

const App = () => {
  const location = useLocation();
  const hideNavbarPaths = ['/profile'];
  const isProjectDetail = location.pathname.startsWith('/projects/');

  return (
    <>
      {!hideNavbarPaths.includes(location.pathname) && !isProjectDetail && <Navbar />}
      <Routes>
        <Route path="/" element={
          <>
            <div id="home"><Home /></div>
            {/* <div id="about"><About /></div> */}
            <div id="skills"><Skills /></div>
            <div id="works"><Works /></div>
            <div id="contact"><Contact /></div>
          </>
        } />
        <Route path="/projects/:id" element={<ProjectDetail />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
};

export default App; 