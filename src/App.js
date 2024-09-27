import { Routes, Route} from "react-router-dom";
import Intro from "./components/Intro/Intro";
import NavBar from "./components/NavBar/NavBar";
import Skill from "./components/Skill/Skill"
import Portfolio from "./components/Portfolio/Portfolio";
import Resume from "./components/Resume/Resume";
import { useRef } from "react";

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';





function App() {

  const skillRef = useRef(null); 

  const scrollToSkills = () => {
    skillRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="App">
        <NavBar onAboutClick={scrollToSkills} />
        <Routes>
        <Route path='/' element={
          <>
            <Intro />
            <div ref={skillRef}>
              <br/>
              <Skill />
            </div>
          </>
        } />
        <Route path='/portfolio' element={<Portfolio />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
    
     
    </div>
  );
}

export default App;
