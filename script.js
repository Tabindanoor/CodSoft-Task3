let displayValue = "0";
let operator = "";
let firstOperand = null;
let waitingForSecondOperand = false;

const display = document.getElementById("display");

function appendToDisplay(number) {
    if (waitingForSecondOperand) {
        displayValue = number;
        waitingForSecondOperand = false;
    } else {
        displayValue = displayValue === "0" ? number : displayValue + number;
    }
    display.textContent = displayValue;
}

function setOperator(op) {
    if (firstOperand === null) {
        firstOperand = parseFloat(displayValue);
        operator = op;
        displayValue = "0";
    } else if (!waitingForSecondOperand) {
        calculate();
        operator = op;
    }
    waitingForSecondOperand = true;
} 

function calculate() {
    const secondOperand = parseFloat(displayValue);
    if (operator === "+") {
        displayValue = (firstOperand + secondOperand).toString();
    } else if (operator === "-") {
        displayValue = (firstOperand - secondOperand).toString();
    } else if (operator === "*") {
        displayValue = (firstOperand * secondOperand).toString();
    } else if (operator === "/") {
        displayValue = (firstOperand / secondOperand).toString();
    }
    display.textContent = displayValue;
    firstOperand = null;
    operator = "";
}

function clearDisplay() {
    displayValue = "0";
    operator = "";
    firstOperand = null;
    waitingForSecondOperand = false;
    display.textContent = displayValue;
}
