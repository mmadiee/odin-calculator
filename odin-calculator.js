let displayElement = document.getElementById("display");
let currentInput = "";

function display(input) {
    currentInput += input;
    displayElement.textContent = currentInput;
}

function allClear() {
    currentInput = '';
    displayElement.textContent = '';
}

function deleteEntry() {
  currentInput = currentInput.slice(0, -1);
  displayElement.textContent = currentInput;
}

function toggleSign() {}

function calculate() {}
