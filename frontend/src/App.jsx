import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Internship from "./components/Internship";
import Achievements from "./components/Achievements";
import Certifications from "./components/Certifications";
import CodingProfiles from "./components/CodingProfiles";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import CursorGlow from "./components/CursorGlow";
import ParticlesBg from "./components/ParticlesBg";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  if (loading) return <Loader />;

  return (
    <>
      <CursorGlow />
      <ParticlesBg />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Internship />
      <Achievements />
      <Certifications />
      <CodingProfiles />
      <Education />
      <Contact />
      <Footer />
    </>
  );
}

export default App;