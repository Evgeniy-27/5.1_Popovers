const btn = document.querySelector('[toggle="popover"]');
const popover = document.querySelector('[widget="popover-top"]');

btn.addEventListener('click', (e) => {
  e.preventDefault();
  popover.classList.toggle('active');
  popover.classList.toggle('invisible');
});
