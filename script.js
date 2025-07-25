const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let current = '';
let resetNext = false;

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      current = '';
      updateDisplay('0');
    } else if (value === '←') {
      current = current.slice(0, -1);
      updateDisplay(current || '0');
    } else if (value === '=') {
      try {
        const result = eval(current);
        updateDisplay(result);
        current = result.toString();
        resetNext = true;
      } catch {
        updateDisplay('Erro');
        current = '';
      }
    } else {
      if (resetNext && /[0-9.]/.test(value)) {
        current = value;
      } else {
        current += value;
      }
      updateDisplay(current);
      resetNext = false;
    }
  });
});

function updateDisplay(text) {
  display.textContent = text;
}
