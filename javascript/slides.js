const grande = document.querySelector('.grande');
const punto = document.querySelectorAll('.punto');

punto.forEach((e, i)=>{
  punto[i].addEventListener('click', ()=>{
    let position = i;
    let operation = position * -50;
    grande.style.transform = `translateX(${operation}%)`
    punto.forEach((e,i) =>{
      punto[i].classList.remove('activo');
    })
    punto[i].classList.add('activo');
  })


})
