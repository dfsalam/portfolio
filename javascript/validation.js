const email = document.querySelector('.form-email')
const lower = email.value.toLowerCase()
const button = document.querySelector('.btn')
const label = document.querySelector('.form--error')

button.addEventListener('click', () => {
    console.log("click¡")
    if (email.value == lower){
        console.log("Equal")
    }else{
        console.log("Different")
        label.style.display = 'block';
        setTimeout(() => {label.style.display = 'none'}, 1000)
    }

});



