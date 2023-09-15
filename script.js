let currentInput = '';
let currentOperator = '';
let resultDisplayed = false;

function appendToDisplay(value) {
    if (resultDisplayed) {
        document.getElementById('display').innerText = '';
        resultDisplayed = false;
    }
    currentInput += value;
    document.getElementById('display').innerText = currentInput;
}

function clearDisplay() {
    currentInput = '';
    currentOperator = '';
    document.getElementById('display').innerText = '0';
}

function calculate(operator) {
    if (currentOperator === '') {
        currentOperator = operator;
        currentInput += operator;
        document.getElementById('display').innerText = currentInput;
    } else if (operator === '=') {
        currentInput = eval(currentInput);
        document.getElementById('display').innerText = currentInput;
        resultDisplayed = true;
    } else {
        currentInput += operator;
        currentOperator = operator;
        document.getElementById('display').innerText = currentInput;
    }
}
