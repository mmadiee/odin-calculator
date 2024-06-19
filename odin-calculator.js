let displayElement = document.getElementById('display');
let firstNumber = '';
let secondNumber = '';
let currentOperator = '';
let shouldResetDisplay = false;

function appendNumber(number) {
    if (number === '.' && displayElement.textContent.includes('.')) {
        return; // Prevents adding more than one decimal point
    }
    
    if (shouldResetDisplay) {
        displayElement.textContent = '';
        shouldResetDisplay = false;
    }
    
    if (displayElement.textContent === '0' && number !== '.') {
        displayElement.textContent = '';
    }
    
    displayElement.textContent += number;
    
    // Disable decimal button if there's already one.
    document.getElementById('decimal').disabled = displayElement.textContent.includes('.');
}


function setOperator(operator) {
    if (currentOperator !== '') {
        calculate();
    }
    firstNumber = displayElement.textContent;
    currentOperator = operator;
    shouldResetDisplay = true;
}

function calculate() {
    if (currentOperator === '' || shouldResetDisplay) {
        return;
    }
    secondNumber = displayElement.textContent;
    const result = operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber));
    displayElement.textContent = (typeof result === "number") ? roundResult(result) : result;
    firstNumber = displayElement.textContent;
    currentOperator = '';
    shouldResetDisplay = true;
}

function roundResult(number) {
    return Math.round(number * 100000) / 100000;
}

function allClear() {
    firstNumber = '';
    secondNumber = '';
    currentOperator = '';
    displayElement.textContent = '0';
}

function deleteEntry() {
    displayElement.textContent = displayElement.textContent.slice(0, -1);
    if (displayElement.textContent === '') {
        displayElement.textContent = '0';
    }
}

function toggleSign() {
    displayElement.textContent = (displayElement.textContent.charAt(0) === '-') ?
        displayElement.textContent.slice(1) :
        '-' + displayElement.textContent;
}

function operate(operator, a, b) {
    switch (operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
        default:
            return null;
    }
}

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "No Zero Bro";
    }
    return a / b;
}
