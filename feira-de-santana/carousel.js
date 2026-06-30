const track = document.querySelector('.review-track');
const heading = document.querySelector('.testimonials-heading');
if (track && heading) {
  const controls = document.createElement('div');
  controls.className = 'carousel-controls';
  controls.innerHTML = '<button class="carousel-button carousel-button--previous" type="button" aria-label="Avaliações anteriores">←</button><button class="carousel-button carousel-button--next" type="button" aria-label="Próximas avaliações">→</button>';
  track.parentElement.appendChild(controls);
  const [previous, next] = controls.querySelectorAll('button');
  const move = direction => {
    const card = track.querySelector('.review-card');
    track.scrollBy({ left: direction * ((card?.offsetWidth || 320) + 16), behavior: 'smooth' });
  };
  previous.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
}
