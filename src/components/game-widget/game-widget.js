export default class GameWidget {
  constructor(element) {
    if (typeof element !== 'string') {
      this.element = element;
    } else {
      this.element = document.querySelectorAll(element);
    }

    this.hit = document.querySelector('.hit');
    this.miss = document.querySelector('.miss');
    this.onClick = this.onClick.bind(this);
    this.onHit = this.onHit.bind(this);
    this.onMiss = this.onMiss.bind(this);
    this.gameOver = this.gameOver.bind(this);
    this.element.forEach((el) => el.addEventListener('click', this.onClick));
  }

  onClick(e) {
    const { target } = e;
    const field = target.closest('.field');
    if (field === null) {
      return;
    }
    if (field.classList.contains('active')) {
      this.onHit();
    } else {
      this.onMiss();
    }
  }

  onHit() {
    this.hit.textContent = +(this.hit.textContent) + 1;
  }

  onMiss() {
    this.miss.textContent = +(this.miss.textContent) + 1;
    if (+(this.miss.textContent) === 5) {
      this.gameOver();
    }
  }

  gameOver() {
    alert('GAME OVER');
    this.hit.textContent = '0';
    this.miss.textContent = '0';
  }
}
