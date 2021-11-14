let buttons = document.querySelectorAll(".calc-button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function takeButtonId() {
    buttonClicked(btn.id);
  });
});

let firstNumber = "";
let operator = "";
let previousNumber = "";
let currentDisplay = document.getElementById("digits");

function buttonClicked(button) {
  if (isNaN(button)) {
    operatorPressed(button);
  } else {
    if (operator.length == 0 && firstNumber.length <= 7) {
      firstNumberPressed(button);
    } else if (operator.length == 1 && secondNumber.length <= 7) {
      secondNumberPressed(button);
    }
  }
}

function operatorPressed(button) {
  if (button == "/" || button == "*" || button == "-" || button == "+") {
    operator = button;
    if (firstNumber.length != 0 && secondNumber.length != 0) {
      operate(firstNumber, operator, secondNumber);
    }
  } else if (
    button == "=" &&
    firstNumber.length != 0 &&
    secondNumber.length != 0
  ) {
    operate(firstNumber, operator, secondNumber);
  } else if (button == "ac") {
  } else if (button == "ce") {
  } else if (button == "%") {
  } else if (button == "change-symbol") {
  } else if (button == ".") {
  } else {
    console.log("Unexpected behavior at operator pressed");
  }
}

function firstNumberPressed(button) {
  firstNumber += button;
  updateDisplay(firstNumber);
}

function secondNumberPressed(button) {
  secondNumber += button;
  updateDisplay(secondNumber);
}

function updateDisplay(activeDisplay) {
  currentDisplay.innerText = activeDisplay;
}

function operate(first, operation, second) {
  if (operation == "+") {
    add(first, second);
  } else if (operation == "-") {
    subtract(first, second);
  } else if (operation == "*") {
    multiply(first, second);
  } else if (operation == "/") {
    divide(first, second);
  } else {
    console.log("Fatal error at operate");
  }
}

function add(a, b) {
  firstNumber = parseFloat(a) + parseFloat(b);
  showAnswer(firstNumber);
}

function subtract(a, b) {
  firstNumber = parseFloat(a) - parseFloat(b);
  showAnswer(firstNumber);
}

function multiply(a, b) {
  firstNumber = parseFloat(a) * parseFloat(b);
  showAnswer(firstNumber);
}

function divide(a, b) {
  firstNumber = parseFloat(a) / parseFloat(b);
  showAnswer(firstNumber);
}

function showAnswer(getAnswer) {
  secondNumber = "";
  updateDisplay(getAnswer);
}
