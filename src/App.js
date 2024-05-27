import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  // doesn't work for parallax effect for social bar on left ???
  const [offsetY, setOffsetY] = useState(0);

  return (
    <>
      <Router basename="/joe-react-portfolio">
        <NavMenu />
        <SmoothScroll setOffsetY={setOffsetY}>
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