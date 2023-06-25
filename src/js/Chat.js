export default class Chat {
  constructor(container) {
    this.container = container;
  }

  drawUI() {
    const container = document.createElement('div');
    container.classList.add('container');
    this.container.appendChild(container);

    const form = document.createElement('form');
    form.classList.add('form');
    container.appendChild(form);

    const title = document.createElement('div');
    title.classList.add('title');
    title.textContent = 'Напишите нам';
    form.appendChild(title);

    const close = document.createElement('div');
    close.classList.add('close');
    close.textContent = 'X';
    form.appendChild(close);

    const textarea = document.createElement('textarea');
    textarea.classList.add('textarea');
    form.appendChild(textarea);

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.textContent = 'Отправить';
    form.appendChild(submit);

    const button = document.createElement('button');
    button.classList.add('button');
    container.appendChild(button);
  }

  init() {
    this.drawUI();
    this.toAnimate();
  }

  toAnimate() {
    const button = document.querySelector('.button');
    const form = document.querySelector('.form');
    const close = document.querySelector('.close');

    button.addEventListener('click', (e) => {
      e.preventDefault();
      button.classList.add('appear');
      form.classList.add('form-show');
    });

    close.addEventListener('click', (e) => {
      e.preventDefault();
      form.classList.remove('form-show');
      button.classList.remove('appear');
    });
  }
}
