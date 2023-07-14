const properties = [
  {
    name: 'Retrench Pal',
    description: `RetrenchPal is a web application developed with Ruby on Rails where you can manage your budget: you have a list of transactions associated with a category so that you can see how much money you spent and on what.`,
    image: './Images/Cards/RetrenchPal.jpg',
    technologies: ['html', 'bootstrap', 'ruby on rails'],
    live_version: 'https://mysite-1w9b.onrender.com/',
    source: 'https://github.com/dfsalam/ror-budget-app',
    image_pop: './Images/Cards/RetrenchPal.jpg',
  },

  {
    name: 'DD Eats',
    description: 'DD Eats is a web application built with HTML, CSS, and JavaScript that shows different recipes. The application allows you to like and, after clicking on a recipe to see it in detail, make comments and see the previous comment list.',
    image: './Images/Cards/DDEats.jpg',
    technologies: ['html', 'bootstrap', 'javascript'],
    live_version: 'https://dennis-every.github.io/dd_eats/dist/',
    source: 'https://github.com/dfsalam/dd_eats',
    image_pop: './Images/Cards/DDEats.jpg',
  },

  {
    name: 'Boyacá Pollution Metrics',
    description: `Pollution Metrics App is a SPA that provides information about some pollution metrics for all the towns in the state of Boyacá in Colombia.`,
    image: './Images/Cards/Mask_4.png',
    technologies: ['React', 'Redux', 'CSS'],
    live_version: 'https://boyaca-pollution-metrics.onrender.com/',
    source: 'https://github.com/dfsalam/metrics-webapp',
    image_pop: './Images/Cards/pollutionMetrics.jpg',
  },

  {
    name: 'Engineering Conference',
    description: `The project consists of two pages, home and about. I started with the mobile version, and using media queries, the pages are made responsive for the desktop version. In the featured speakers section the information was inserted dynamically with JS.`,
    image: './Images/Cards/conference.jpg',
    technologies: ['html', 'css', 'javascript'],
    live_version: 'https://dfsalam.github.io/engineering-conference/',
    source: 'https://github.com/dfsalam/engineering-conference',
    image_pop: './Images/Cards/conference.jpg',
  },
];
let count = 1;
properties.forEach((element) => {
  const container = document.querySelector('.middle-section');

  const section = document.createElement('section');
  section.classList.add('card');
  section.setAttribute('id', count);
  count += 1;

  section.style.backgroundColor = `black`;

  const title = document.createElement('h1');
  title.classList.add('card-title');
  title.innerHTML = element.name;

  const paragraph = document.createElement('p');
  paragraph.innerHTML = element.description;

  paragraph.classList.add('card-paragraph');

  const uList = document.createElement('ul');
  uList.classList.add('card-stack');
  container.appendChild(section);
  section.appendChild(title);
  section.appendChild(paragraph);
  section.appendChild(uList);
  const tech = element.technologies;
  tech.forEach((tech) => {
    const li = document.createElement('li');
    li.classList.add('card-stack-li');
    li.innerHTML = tech;
    uList.appendChild(li);
  });

  const btn = document.createElement('button');
  btn.classList.add('see--project--btn');
  btn.innerHTML = 'See project';
  section.appendChild(btn);
});

/* Popup window open and close */
const btn = document.querySelectorAll('.see--project--btn');

const closeIcon = document.querySelector('.popup--close');

const popup = document.querySelector('.popup');

function display() {
  popup.classList.add('display--block');
  popup.classList.remove('display--none');
}

function closePop() {
  popup.classList.add('display--none');
  const popupLanguages = document.querySelector('.popup--languages');
  popupLanguages.innerHTML = '';
  document.querySelector('body').classList.remove('block-scroll');
}

btn.forEach((e) => {
  let parent = '';
  e.addEventListener('click', () => {
    display();
    document.querySelector('body').classList.add('block-scroll');

    parent = e.parentElement;
    const number = parent.getAttribute('id') - 1;

    document.querySelector('.popup--name').innerHTML = properties[number].name;
    const popupLanguages = document.querySelector('.popup--languages');
    const tech = properties[number].technologies;
    tech.forEach((tech) => {
      const li = document.createElement('li');
      li.classList.add('works-stack-li');
      li.innerHTML = tech;
      popupLanguages.appendChild(li);
    });

    const seeLive = document.querySelector('.popup--seelive');
    const seeSource = document.querySelector('.popup--seesource');
    seeLive.setAttribute('href', properties[number].live_version);
    seeSource.setAttribute('href', properties[number].source);

    document.querySelector('.popup--paragraph').innerHTML = properties[number].description;
    document.querySelector('.popup--image').setAttribute('src', properties[number].image_pop);
  });
});

closeIcon.addEventListener('click', closePop);
