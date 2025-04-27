import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Trilesh Pavan Katreddy | Portfolio";
    
    const titleElement = document.querySelector('title[data-default]');
    if (titleElement) {
      titleElement.textContent = "Trilesh Pavan Katreddy | Portfolio";
    }
  }, []);
  
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Background gradient */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-50 via-slate-50 to-purple-50 pointer-events-none" />
      
      {/* Main content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Hero />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Education />
            <Certifications />
            <Contact />
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;