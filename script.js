let nav = document.querySelector('.nav-menu');
let menu = document.querySelector('.hamb-menu');

function hambClick() {
    menu.removeAttribute('hidden')
}

nav.addEventListener('click',hambClick);