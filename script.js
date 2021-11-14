//digits.innerText = 888.88888;

// let buttons = document.querySelectorAll(".calc-button");
// let clicks = [];
// for (const button of buttons) {
//   button.addEventListener("click", () => {
//     clicks.push(button.id);
//     console.log(button.id)
//   });
// }

let buttons = document.querySelectorAll(".calc-button");
buttons.forEach((btn) => {
  btn.addEventListener("click", function takeButtonId() {
    buttonClicked(btn.id);
  });
});

let firstNumber = "";
let operator = "";
let secondNumber = "";

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
  if (firstNumber.length != 0) {
    operator = button;
    console.log(operator);
  }
}

function firstNumberPressed(button) {
  firstNumber += button;
  document.getElementById("digits").innerText = firstNumber;
}

function secondNumberPressed(button) {
  secondNumber += button;
  document.getElementById("digits").innerText = secondNumber;
}
