function startPlay() {
  const cell = document.querySelectorAll('.field');
  const div = document.createElement('div');
  div.classList.add('active');
  setInterval(() => {
    const element = cell[Math.floor(Math.random() * cell.length)];
    element.insertAdjacentElement('afterbegin', div);
  }, 1000);
}

window.addEventListener('DOMContentLoaded', startPlay);
