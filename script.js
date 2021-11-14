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
    console.log(btn.id);
  });
});
