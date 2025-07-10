let buttons = document.querySelectorAll("button");
let display = document.querySelector(".showNumber");
let input = "";

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    let value = buttons[i].textContent;
    if (value === "AC") {
      input = "";
    } else if (value === "DE") {
      input = input.slice(0, -1);
    } else if (value === "=") {
      try {
        input = eval(input);
      } catch (error) {
        input = "invalid input!";
      }
    } else {
      input = input + value;
    }
    display.textContent = input;
  });
}
