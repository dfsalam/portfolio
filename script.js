const nav = document.querySelector('.nav-menu');
const menu = document.querySelector('.hamb-menu');
const close = document.querySelector('.hamb--close');
const hTagsa= document.querySelector('.hamb--ha');
const hTagsb= document.querySelector('.hamb--hb');
const hTagsc= document.querySelector('.hamb--hc');

function hambClick() {
  menu.removeAttribute('hidden');
}

function closeClick() {
  menu.setAttribute('hidden', 'hidden');
}

nav.addEventListener('click', hambClick);
close.addEventListener('click', closeClick);
hTagsa.addEventListener('click', closeClick);
hTagsb.addEventListener('click', closeClick);
hTagsc.addEventListener('click', closeClick);
