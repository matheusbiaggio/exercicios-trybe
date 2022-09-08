const buttonSubmit = document.querySelector('#buttonSubmit');
const buttonClear = document.querySelector('#buttonClear');
const inputName = document.querySelector('#name');
const inputEmail = document.querySelector('#inputEmail');
const textWinner = document.querySelector('#textWinner');
const destination1 = document.querySelector('#destination1');
const destination2 = document.querySelector('#destination2');
const destination3 = document.querySelector('#destination3');
const destination4 = document.querySelector('#destination4');
const travelDate = document.querySelector('#travelDate');
const agreeReceivedEmail = document.querySelector('#agreeReceivedEmail');
const agreeImage = document.querySelector('#agreeImage');

function pressButtonSubimit(event) {
  event.preventDefault();
}

function pressButtonClear() {
  inputName.value = '';
  inputEmail.value = '';
  textWinner.value = '';
  destination1.checked = false;
  destination2.checked = false;
  destination3.checked = false;
  destination4.checked = false;
  travelDate.value = '';
  agreeReceivedEmail.checked = false;
  agreeImage.checked = false;
}

buttonSubmit.addEventListener('click', pressButtonSubimit);
buttonClear.addEventListener('click', pressButtonClear);