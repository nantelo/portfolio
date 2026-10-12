// In production the backend lives on a different origin,
// so its URL is injected at build time via VITE_API_URL.
// Locally (no env var set) the Vite dev proxy handles /api.
const API_URL = import.meta.env.VITE_API_URL || "";

export async function fetchProjects() {
  const res = await fetch(`${API_URL}/api/portfolio/projects`);
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch(`${API_URL}/api/portfolio/skills`);
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}

export async function sendContactMessage(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to send message");
  return body;
}
