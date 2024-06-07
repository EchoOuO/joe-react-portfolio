import React, { useEffect, useState } from 'react';
import GlobalStyles from './styles/GlobalStyle';
import Theme_day from './styles/Theme_day';
import Theme_night from './styles/Theme_night';
import Theme_snow_mountain from './styles/Theme_snow_mountain';
import Theme_aroura from './styles/Theme_aroura';
import Theme_sunset from './styles/Theme_sunset';
import Typography from './styles/Typography';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import Home from './pages/Home';
import NavMenu from './components/NavMenu';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import PhotoSelect from './components/PhotoSelect';
import Transition from './components/Transition';

export default function App() {
  // doesn't work for parallax effect for social bar on left ???
  const [offsetY, setOffsetY] = useState(0);
  
  const [photoSelected, setphotoSelected] = useState("")
  const theme_array = [ "day", "snow_mountain", "sunset", "night", "aroura"]
  const [theme, setTheme] = useState("")
  const [theme_idx, setTheme_idx] = useState("")


  useEffect(()=>{
    setTheme(theme_array[Number(photoSelected)])
    setTheme_idx(Number(photoSelected))
  },[photoSelected])

  const changeTheme = () => {
    switch (theme) {
      case "day":
        return <Theme_day />;
      case "snow_mountain":
        return <Theme_snow_mountain />;
      case "aroura":
        return <Theme_aroura />
      case "sunset":
        return <Theme_sunset />
      case "night":
        return <Theme_night />;
    }
    setTheme(theme_array[Number(photoSelected)])
  };

  function themeHandler () {
    console.log(theme, theme_idx)
    setTheme_idx(theme_idx+1)
    setTheme(theme_array[theme_idx])
    if (theme_idx == theme_array.length -1){
      setTheme_idx(0)
    }
  }

  return (
    <>  
        { !photoSelected ? 
        <>
          <GlobalStyles/> 
          <Typography />
          <PhotoSelect setphotoSelected={setphotoSelected}/> 
        </> :
        <>
          {changeTheme()}
          <GlobalStyles/> 
          <Typography />
          <Router basename="/joe-react-portfolio">
            <NavMenu theme={theme} themeHandler={themeHandler}/>
            <SmoothScroll setOffsetY={setOffsetY} >
              <Routes>
                <Route path="/" element={<Home offsetY={offsetY} theme={theme}/>} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
              <Footer />
            </SmoothScroll>
          </Router>
        </>
        }
    </>
  );
}