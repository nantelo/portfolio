import { useEffect, useState } from "react";

// Reusable hook version of your original typing animation
export default function useTyping(words, speed = 200, pause = 1800) {
  const [index, setIndex] = useState(0);
  const [sub, setSub] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[index % words.length];
    let timeout;

    if (!deleting && sub < word.length) {
      timeout = setTimeout(() => setSub(sub + 1), speed);
    } else if (!deleting && sub === word.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && sub > 0) {
      timeout = setTimeout(() => setSub(sub - 1), speed / 2);
    } else {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [sub, deleting, index, words, speed, pause]);

  return words[index % words.length].substring(0, sub);
}
