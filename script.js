let buttons = document.querySelectorAll(".calc-button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function takeButtonId() {
    buttonClicked(btn.id);
  });
});

let firstNumber = "";
let operator = "";
let currentOperator = "";
let secondNumber = "";
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
    currentOperator = operator;
    operator = button;
    if (firstNumber.length != 0 && secondNumber.length != 0) {
      operate(firstNumber, currentOperator, secondNumber);
    }
  } else if (
    button == "=" &&
    firstNumber.length != 0 &&
    secondNumber.length != 0
  ) {
    operate(firstNumber, operator, secondNumber);
  } else if (button == "ac") {
    otherButton(button);
  } else if (button == "ce") {
    otherButton(button);
  } else if (button == "%") {
    otherButton(button);
  } else if (button == "change-symbol") {
    otherButton(button);
  } else if (button == ".") {
    otherButton(button);
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
  calcs = parseFloat(a) + parseFloat(b);
  showAnswer(calcs);
}

function subtract(a, b) {
  calcs = parseFloat(a) - parseFloat(b);
  showAnswer(calcs);
}

function multiply(a, b) {
  calcs = parseFloat(a) * parseFloat(b);
  showAnswer(calcs);
}

function divide(a, b) {
  let calcs = "";
  if (b == 0) {
    updateDisplay("Infinity");
    firstNumber = 0;
    secondNumber = 0;
  } else {
    calcs = parseFloat(a) / parseFloat(b);
  }
  showAnswer(calcs);
}

function showAnswer(getAnswer) {
  firstNumber = getAnswer;
  secondNumber = "";
  getAnswer = getAnswer.toFixed(2);
  if (getAnswer.length > 8) {
    getAnswer = "RangeErr.";
  }
  updateDisplay(getAnswer);
}

function otherButton(oButton) {
  if (oButton == "ce") {
    if (secondNumber != 0) {
      secondNumber = "";
      updateDisplay(0);
    } else if (firstNumber != 0) {
      firstNumber = "";
      updateDisplay(0);
    }
  } else if (oButton == "ac") {
    location.reload();
  } else if (oButton == "%") {
    if (secondNumber != 0) {
      secondNumber = secondNumber * 0.01;
      secondNumber = secondNumber.toFixed(2);
      updateDisplay(secondNumber);
    } else if (firstNumber != 0) {
      firstNumber = firstNumber * 0.01;
      firstNumber = firstNumber.toFixed(2);
      updateDisplay(firstNumber);
    }
  } else if (oButton == ".") {
    if (secondNumber != 0) {
      secondNumber = checkForPeriod(secondNumber);
      updateDisplay(secondNumber);
    } else if (firstNumber != 0) {
      firstNumber = checkForPeriod(firstNumber);
      operator = "";
      updateDisplay(firstNumber);
    }
  } else if (oButton == "change-symbol") {
    if (secondNumber != 0) {
      secondNumber = checkSymbol(secondNumber);
      updateDisplay(secondNumber);
    } else if (firstNumber != 0) {
      firstNumber = checkSymbol(firstNumber);
      operator = "";
      updateDisplay(firstNumber);
    }
  }
}

function checkForPeriod(check) {
  let found = false;
  for (let i = 0; i < check.length; i++) {
    if (check.charAt(i) == ".") {
      found = true;
    }
  }
  if (found == false) {
    check = check + ".";
  }
  return check;
}

function checkSymbol(check) {
  let found = false;
  for (let i = 0; i < check; i++) {
    if ("check".charAt(i) == "-") {
      found = true;
    }
  }
  if (found == false) {
    return (check = -check);
  }
}
