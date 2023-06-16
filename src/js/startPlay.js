function startPlay() {
  const playingField = document.querySelectorAll('.playing-field');
  let activeField = 0;
  setInterval(() => {
    const index = Math.floor(1 + Math.random() * 15);
    if (activeField === index) {
      playingField[0].children[0].classList.add('active');
      playingField[0].children[activeField].classList.remove('active');
      activeField = 0;
      return;
    }
    playingField[0].children[index].classList.add('active');
    playingField[0].children[activeField].classList.remove('active');
    activeField = index;
  }, 1000);
}

window.addEventListener('DOMContentLoaded', startPlay);
