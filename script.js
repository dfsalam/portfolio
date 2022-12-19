const nav = document.querySelector('.nav-menu');
const menu = document.querySelector('.hamb-menu');

function hambClick() {
  menu.removeAttribute('hidden');
}

nav.addEventListener('click', hambClick);