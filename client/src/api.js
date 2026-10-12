export async function fetchProjects() {
  const res = await fetch("/api/portfolio/projects");
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function fetchSkills() {
  const res = await fetch("/api/portfolio/skills");
  if (!res.ok) throw new Error("Failed to fetch skills");
  return res.json();
}

export async function sendContactMessage(data) {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to send message");
  return body;
}
