// Mobile menu toggle
const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('primary-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Respect reduced motion (no animations here yet, but this is where we gate them)
// if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) { /* no-op */ }
