const email = document.querySelector('.form-email')
const button = document.querySelector('.btn')
const label = document.querySelector('.form--error')
const frmContact = document.getElementById('frmContact');

frmContact.addEventListener('submit', (e) => {
    e.preventDefault();
    label.style.display = 'none';
    if (email.value === email.value.toLowerCase()){
        frmContact.submit();
        return;
    }

    label.style.display = 'block';
});



