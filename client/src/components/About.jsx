export default function About() {
  return (
    <section id="about" className="section">
      <h2 className="section-title">About Me</h2>
      <div className="glass-card about-card">
        <p>
          I'm <strong>Nantelo Kath</strong>, a full stack developer and
          computer technology student specializing in AI and Deep Learning at
          Assam Down Town University. I love building complete web
          applications — from pixel-perfect frontends to structured REST APIs
          backed by MongoDB.
        </p>
        <p>
          My current focus is the <strong>MERN stack</strong> (MongoDB,
          Express, React, Node.js), combined with strong fundamentals in C++,
          data structures and problem solving.
        </p>
        <div className="social">
          <a href="https://github.com/nantelo" target="_blank" rel="noreferrer" aria-label="GitHub">
            <i className="fab fa-github" />
          </a>
          <a
            href="https://www.linkedin.com/in/nantelo-kath-a702a1329/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin" />
          </a>
          <a
            href="https://www.instagram.com/_antelo_kath/"
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram" />
          </a>
          <a href="#" aria-label="Twitter">
            <i className="fab fa-twitter" />
          </a>
        </div>
      </div>
    </section>
  );
}
