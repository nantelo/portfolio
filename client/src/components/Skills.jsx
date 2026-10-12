import { useEffect, useState } from "react";
import { fetchSkills } from "../api.js";

const CATEGORY_LABELS = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Database",
  tools: "Tools & Languages",
};

export default function Skills() {
  const [skills, setSkills] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetchSkills()
      .then(setSkills)
      .catch((err) => setError(err.message));
  }, []);

  const grouped = skills.reduce((acc, s) => {
    (acc[s.category] = acc[s.category] || []).push(s);
    return acc;
  }, {});

  return (
    <section id="skills" className="section">
      <h2 className="section-title">Skills</h2>
      {error && <p className="error">{error}</p>}
      <div className="skills-grid">
        {Object.entries(grouped).map(([cat, items]) => (
          <div key={cat} className="glass-card skill-card">
            <h3>{CATEGORY_LABELS[cat] || cat}</h3>
            {items.map((s) => (
              <div key={s.name} className="skill">
                <div className="skill-head">
                  <span>{s.name}</span>
                  <span>{s.level}%</span>
                </div>
                <div className="skill-bar">
                  <div className="skill-fill" style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>
        ))}
        {!skills.length && !error && <p className="loading">Loading skills…</p>}
      </div>
    </section>
  );
}
