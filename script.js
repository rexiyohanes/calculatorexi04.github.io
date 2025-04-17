const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
let resetDisplay = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (button.classList.contains('number')) {
      if (display.textContent === '0' || resetDisplay) {
        display.textContent = value;
        resetDisplay = false;
      } else {
        display.textContent += value;
      }
    } else if (button.classList.contains('operator')) {
      display.textContent += ` ${value} `;
    } else if (button.classList.contains('clear')) {
      display.textContent = '0';
    } else if (button.classList.contains('delete')) {
      display.textContent = display.textContent.slice(0, -1) || '0';
    } else if (button.classList.contains('equal')) {
      try {
        display.textContent = eval(display.textContent.replace(/[^-()\d/*+.]/g, ''));
      } catch {
        display.textContent = 'Error';
      }
      resetDisplay = true;
    }
  });
});