const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
const clearButton = document.getElementById('clear');
const equalButton = document.getElementById('equal');

let currentInput = '';
let operator = '';
let resultDisplayed = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.getAttribute('data-value');

    // Clear screen if result was previously displayed
    if (resultDisplayed && !isNaN(value)) {
      currentInput = '';
      resultDisplayed = false;
    }

    // Handle clear
    if (button.id === 'clear') {
      currentInput = '';
      display.textContent = '0';
      return;
    }

    // Handle equal
    if (button.id === 'equal') {
      try {
        const result = eval(currentInput);
        display.textContent = result;
        currentInput = result.toString();
        resultDisplayed = true;
      } catch (e) {
        display.textContent = 'Error';
        currentInput = '';
      }
      return;
    }

    // Add to input
    currentInput += value;
    display.textContent = currentInput;
  });
});
