const email = document.querySelector('.form-email');

const label = document.querySelector('.form--error');
const frmContact = document.getElementById('frmContact');
const getResume = document.getElementById('getResume');

getResume.addEventListener('click', () => {
  window.open('./Images/Diego_Salamanca_Resume.pdf');
});
frmContact.addEventListener('submit', (e) => {
  e.preventDefault();
  label.style.display = 'none';
  if (email.value === email.value.toLowerCase()) {
    frmContact.submit();
    return;
  }

  label.style.display = 'block';
});
