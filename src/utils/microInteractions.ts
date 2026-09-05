// Reusable micro-interactions for landing pages:
// 1. Scroll reveal — add .reveal-on-scroll to elements, optional [data-reveal-delay="100"]
// 2. Cursor spotlight — add .spotlight-card to a card, it tracks the pointer via --mx/--my
// Usage: import "@/utils/microInteractions.ts";
// Styles live in global.css. Idempotent — safe with astro:page-load re-runs.

function initMicroInteractions() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // ---- Scroll reveal ----
  const revealEls = document.querySelectorAll<HTMLElement>(".reveal-on-scroll:not(.mi-bound)");
  if (reduced) {
    revealEls.forEach((el) => el.classList.add("is-visible"));
  } else {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            const delay = el.dataset.revealDelay;
            if (delay) el.style.transitionDelay = `${delay}ms`;
            el.classList.add("is-visible");
            obs.unobserve(el);
          }
        });
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 },
    );
    revealEls.forEach((el) => {
      el.classList.add("mi-bound");
      observer.observe(el);
    });
  }

  // ---- Cursor spotlight ----
  if (window.matchMedia("(pointer: coarse)").matches) return;
  document
    .querySelectorAll<HTMLElement>(".spotlight-card:not(.mi-bound)")
    .forEach((card) => {
      card.classList.add("mi-bound");
      let raf = 0;
      let pending: { x: number; y: number } | null = null;
      card.addEventListener("pointermove", (e) => {
        pending = { x: e.clientX, y: e.clientY };
        if (raf) return;
        raf = requestAnimationFrame(() => {
          raf = 0;
          if (!pending) return;
          const rect = card.getBoundingClientRect();
          card.style.setProperty("--mx", `${pending.x - rect.left}px`);
          card.style.setProperty("--my", `${pending.y - rect.top}px`);
        });
      }, { passive: true });
    });
}

export function setupMicroInteractions() {
  if (typeof document === "undefined") return;
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initMicroInteractions, { once: true });
  } else {
    initMicroInteractions();
  }
  document.addEventListener("astro:page-load", initMicroInteractions);
}

if (typeof document !== "undefined") {
  setupMicroInteractions();
}
