const bigContainer = document.querySelector('.bigContainer');
const point = document.querySelectorAll('.point');

point.forEach((e, i) => {
  point[i].addEventListener('click', () => {
    const position = i;
    const operation = position * -25;
    bigContainer.style.transform = `translateX(${operation}%)`;
    point.forEach((e, i) => {
      point[i].classList.remove('activo');
    });
    point[i].classList.add('activo');
  });
});
