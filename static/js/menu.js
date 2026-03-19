const checkbox = document.getElementById('menuCheckbox');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('closeMenu');

checkbox.addEventListener('change', function () {
  menu.classList.toggle('open', this.checked);
});

closeBtn.addEventListener('click', function () {
  menu.classList.remove('open');
  checkbox.checked = false; // remet la checkbox à l'état initial
});
