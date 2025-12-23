import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Problem from './pages/Problem';
import About from './pages/About';
import HowItWorks from './pages/HowItWorks';
import Results from './pages/Results';
import FinalCTA from './pages/FinalCTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-sans text-slate-900 transition-colors duration-500">
      <Navbar />
      <Home />
      <Problem />
      <About />
      <HowItWorks />
      <Results />
      <FinalCTA />
      <Footer />
    </div>
  )
}

export default App
