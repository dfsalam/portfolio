const nav = document.querySelector('.nav-menu');
const menu = document.querySelector('.hamb-menu');
const close = document.querySelector('.hamb--close');
const hTagsa = document.querySelectorAll('.hamb--h');

function hambClick() {
  menu.removeAttribute('hidden');
}

function closeClick() {
  menu.setAttribute('display', 'hidden');
}

nav.addEventListener('click', hambClick);
close.addEventListener('click', closeClick);

hTagsa.forEach((element) => {
  element.addEventListener('click', closeClick);
});
