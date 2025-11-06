// Mobile menu toggle
const btn = document.getElementById('menuBtn');
const nav = document.getElementById('nav');
btn?.addEventListener('click', () => {
const open = nav.classList.toggle('open');
btn.setAttribute('aria-expanded', open ? 'true' : 'false');
});
// Current year in footer
document.getElementById('year').textContent = new Date().getFullYear();
