let inputEl = document.querySelector('#validation-input');

let totalLenght = inputEl.getAttribute("data-length");

inputEl.addEventListener('change', e => {
  const text = e.target.value;

  if (text.length === +totalLenght) {
    inputEl.classList.add('valid');
    inputEl.classList.remove('invalid');
  } else {
    inputEl.classList.remove('valid');
    inputEl.classList.add('invalid');
  }
});