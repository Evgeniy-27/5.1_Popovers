/* eslint-disable linebreak-style */
/* eslint-disable import/no-unresolved */
/* eslint-disable no-undef */
class Widget {
  constructor() {
    this.div = `<div widget="popover-top" class="invisible">
<div class="arrow"></div>
<h3 class="popover-header">Popover title</h3>
<div class="popover-body">And here's some amazing content. It's very engaging. Right?</div>
</div>`;
  }
}

const widget = new Widget();
const container = document.querySelector('.container');
const btn = document.querySelector('[toggle="popover"]');
container.insertAdjacentHTML('afterbegin', widget.div);

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const popover = container.querySelector('[widget="popover-top"]');
  popover.classList.toggle('invisible');
  popover.classList.toggle('active');
});
