import { useEffect, useState } from "react";
import useTyping from "../hooks/useTyping.js";

const IMAGES = ["/img1.png", "/img2.png"];

const ROLES = [
  "Full Stack Developer.....",
  "MERN Stack Developer....",
  "AI & Deep Learning Student..",
];

export default function Hero() {
  const typed = useTyping(ROLES);
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setImgIndex((i) => (i + 1) % IMAGES.length),
      1200
    );
    return () => clearInterval(id);
  }, []);
  return (
    <section id="home" className="section hero">
      <div className="glass-card hero-card">
        <div className="hero-left">
          <div className="image-box glass-card">
            {IMAGES.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Profile"
                className={`profile-img${i === imgIndex ? " active" : ""}`}
              />
            ))}
          </div>
          <p className="hero-edu glass-card">
            Pursuing my Bachelor of Computer Technology in AI &amp; Deep
            Learning at Assam Down Town University.
          </p>
        </div>
        <div className="hero-right">
          <h3>Hello, I'm</h3>
          <h1>Nantelo Kath</h1>
          <h2 className="auto_type">
            {typed}
            <span className="caret">|</span>
          </h2>
          <p>
            Passionate web developer creating modern, responsive and
            interactive websites with beautiful UI/UX. I enjoy turning ideas
            into real digital experiences.
          </p>
          <div className="buttons">
            <a href="#contact" className="btn primary">
              Hire Me
            </a>
            <a
              href="https://drive.google.com/file/d/1blb1hHYW8L67HBF_Qv2IpOR8SypaeOfM/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="btn outline"
            >
              Download CV <i className="fas fa-download" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
