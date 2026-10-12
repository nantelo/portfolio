import { useState } from "react";
import { sendContactMessage } from "../api.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // { ok, text }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus({ ok: true, text: "Sending…" });
    try {
      const res = await sendContactMessage(form);
      setStatus({ ok: true, text: res.message });
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus({ ok: false, text: err.message });
    }
  }

  return (
    <section id="contact" className="section">
      <h2 className="section-title">Contact Me</h2>
      <form className="glass-card contact-card" onSubmit={handleSubmit}>
        <label>
          Name
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
          />
        </label>
        <label>
          Email
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="you@example.com"
          />
        </label>
        <label>
          Message
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows="5"
            placeholder="Tell me about your project…"
          />
        </label>
        <button type="submit" className="btn primary">
          Send Message <i className="fas fa-paper-plane" />
        </button>
        {status && (
          <p className={status.ok ? "status ok" : "status err"}>{status.text}</p>
        )}
      </form>
    </section>
  );
}
