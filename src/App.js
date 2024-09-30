import { Routes, Route, useLocation, useNavigate} from "react-router-dom";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skill from "./components/Skill/Skill"
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import { useRef, useState, useEffect } from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





function App() {

  const skillRef = useRef(null); 
  const [scrollToAbout, setScrollToAbout] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const scrollToSkills = () => {
    setScrollToAbout(true); 
    navigate('/roohi-ali-portfolio/');  
    // if (location.pathname === '/roohi-ali-portfolio/' && skillRef.current) {
    //   skillRef.current.scrollIntoView({ behavior: 'smooth' });
    // }
  };

  useEffect(() => {
    if (location.pathname === '/roohi-ali-portfolio/' && scrollToAbout && skillRef.current) {
      skillRef.current.scrollIntoView({ behavior: 'smooth' });
      setScrollToAbout(false);  // Reset the scroll request after scrolling
    }
  }, [location, scrollToAbout]);

  return (
    <div className="App">
        <NavBar onAboutClick={scrollToSkills} />
        <Routes>
        <Route path='/roohi-ali-portfolio/' element={
          <>
            <Intro />
            <div ref={skillRef}>
              <br/>
              <Skill />
            </div>
          </>
        } />
        <Route path='/roohi-ali-portfolio/portfolio' element={<Portfolio />} />
        <Route path='/roohi-ali-portfolio/resume' element={<Resume />} />
      </Routes>
    
     
    </div>
  );
}

export default App;
