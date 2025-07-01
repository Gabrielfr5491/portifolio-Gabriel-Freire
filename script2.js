 // variantes dos botoes e da tela 
const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');

let currentInput = '';
 // atualiza a tela  
function updateDisplay() {
  display.value = currentInput || '0';
}
 // limpa a tela 
function clearDisplay() {
  currentInput = '';
  updateDisplay();
}
 // adicionou uma funçao ao backspace de adicione o mesmo numero que foi digitado 
function backspace() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function appendNumber(number) {
  // multiplica numeros
  if (number === '.' && currentInput.includes('.')) return;
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === '') return;

  const lastChar = currentInput.slice(-1);
  if ('+-*/'.includes(lastChar)) {
    // substitui o  operador
    currentInput = currentInput.slice(0, -1) + operator;
  } else {
    currentInput += operator;
  }
  updateDisplay();
}

function calculate() {
  try {
    // avalie a expressao com seguranca
    let result = eval(currentInput);
    if (result === undefined) result = '';
    currentInput = result.toString();
  } catch (e) {
    currentInput = 'Erro';
  }
  updateDisplay();
}
 // funcao do igual e do apagar
buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      clearDisplay();
    } else if (button.dataset.action === 'backspace') {
      backspace();
    } else if (button.id === 'equals') {
      calculate();
    } else if (button.dataset.number) {
      appendNumber(button.dataset.number);
    } else if (button.dataset.action) {
      appendOperator(button.dataset.action);
    }
  });
});

updateDisplay();
