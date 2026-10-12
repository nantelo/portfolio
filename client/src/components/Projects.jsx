import { useEffect, useState } from "react";
import { fetchProjects } from "../api.js";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchProjects()
      .then(setProjects)
      .catch((err) => setError(err.message));
  }, []);

  return (
    <section id="projects" className="section">
      <h2 className="section-title">Projects</h2>
      {error && <p className="error">{error}</p>}
      <div className="projects-grid">
        {projects.map((p) => (
          <article key={p._id} className="glass-card project-card">
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>
            {p.link && (
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="btn primary small"
              >
                View Project <i className="fas fa-arrow-right" />
              </a>
            )}
          </article>
        ))}
        {!projects.length && !error && (
          <p className="loading">Loading projects…</p>
        )}
      </div>
    </section>
  );
}
