import React, { useState } from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Theme_day from './styles/Theme_day';
import Theme_night from './styles/Theme_night';
import Typography from './styles/Typography';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';

export default function App() {
  // doesn't work for parallax effect for social bar on left ???
  const [offsetY, setOffsetY] = useState(0);

  const [theme, setTheme] = useState("night")
  function themeHandler () {
    if (theme == "night") {
      setTheme("day")
    }else {
      setTheme("night")
    }
  }

  return (
    <>  
        { theme == "night" ?  <Theme_night/> : <Theme_day/>}
        <GlobalStyles/> 
        <Typography />
        <Router basename="/joe-react-portfolio">
          <NavMenu theme={theme} themeHandler={themeHandler}/>
          <SmoothScroll setOffsetY={setOffsetY} >
            <Routes>
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/" element={<Home offsetY={offsetY} />} />
            </Routes>
            <Footer />
          </SmoothScroll>
        </Router>
      
    </>
  );
}