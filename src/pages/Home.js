import React from 'react';
import AboutSection from '../components/AboutSection';
import ServicesSection from '../components/ServicesSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HeroSection from '../components/HeroSection';


export default function Home({ theme }) {
  return (
    <div>
      <HeroSection theme={theme}/>
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      {/* <TestimonialsSection /> */}
      <ContactBanner />
    </div>
  );
}
