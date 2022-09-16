const verifyIsNumber = (value1, value2) => {
  if ( isNaN(value1) || isNaN(value2) || value1 === '' || value2 === '') {
    throw new Error('Os valores devem ser numéricos e não podem estar em branco.');
  }
};

const sum = () => {
  const value1 = document.querySelector('#value1').value;
  const value2 = document.querySelector('#value2').value;
  try {
    verifyIsNumber(value1, value2);
    const result = Number(value1) + Number(value2);
    document.querySelector('#result').innerHTML = `Resultado: ${result}`;
  } catch (error) {
    document.querySelector('#result').innerHTML = error.message;
  } finally {
    value1 = '';
    value2 = '';
  }
};

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
}