const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((e, i) => {
  punto[i].addEventListener('click', () => {
    const position = i;
    const operation = position * -25;
    grande.style.transform = `translateX(${operation}%)`;
    punto.forEach((e, i) => {
      punto[i].classList.remove('activo');
    });
    punto[i].classList.add('activo');
  });
});
