import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [active, setActive] = useState("home");

  return (
    <>
      <div className="bg-animation" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />

        {/* Rain drops falling across the screen */}
        <div className="rain" aria-hidden="true">
          {Array.from({ length: 40 }, (_, i) => (
            <span key={i} className="drop" style={{ "--i": i + 1 }} />
          ))}
        </div>
      </div>

      <Navbar active={active} onNavigate={setActive} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
