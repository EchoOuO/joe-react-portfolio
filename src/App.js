import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Projects from './pages/Projects';
import SmoothScroll from './components/SmoothScroll';

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <SmoothScroll>
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </SmoothScroll>
      </Router>
    </>
  );
}