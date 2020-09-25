/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
import Widget from './Widget';

const widget = new Widget();
const container = document.querySelector('.container');
const btn = document.querySelector('[toggle="popover"]');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  container.insertAdjacentHTML('afterbegin', widget.div);
  const popover = container.querySelector('[widget="popover-top"]');
  popover.classList.toggle('active');
  popover.classList.toggle('invisible');
});
