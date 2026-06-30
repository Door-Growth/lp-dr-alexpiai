const observer = new IntersectionObserver((entries) => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('show'); observer.unobserve(entry.target); } }), { threshold: .12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
const header = document.querySelector('.header');
const updateHeaderState = () => header?.classList.toggle('is-scrolled', window.scrollY > 18);
updateHeaderState();
window.addEventListener('scroll', updateHeaderState, { passive: true });
const menuToggle = document.querySelector('.menu-toggle');
const headerNav = document.querySelector('.header-nav');
menuToggle?.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
});
headerNav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
  menuToggle?.setAttribute('aria-label', 'Abrir menu');
}));
document.querySelectorAll('.video-card').forEach(card => card.addEventListener('click', () => {
  const source = card.dataset.video;
  if (!source || card.querySelector('video')) return;
  const video = document.createElement('video');
  video.src = source;
  video.controls = true;
  video.playsInline = true;
  video.preload = 'metadata';
  video.setAttribute('aria-label', card.getAttribute('aria-label') || 'Depoimento em vídeo');
  card.replaceChildren(video);
  card.classList.add('is-playing');
  video.play().catch(() => {});
}));
