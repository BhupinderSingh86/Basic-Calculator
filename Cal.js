let input1 = document.querySelector("#firstInput");
let input2 = document.querySelector("#secondInput");
let outputEl = document.querySelector("#total");
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");

input1.addEventListener("keyup", updateText);
// input1.addEventListener("mouseover", updateText);
function updateText(e) {
  firstNumber.textContent = e.target.value; // using the event object properties that come with eventhandler
}

input2.addEventListener("keyup", updateText2);

function updateText2(e) {
  secondNumber.textContent = input2.value; // using the properties/methods that come with input
}

function plusTwoNumbers() {
  cleanUpInput();

  let result = parseFloat(input1.value) + parseFloat(input2.value);
  outputEl.textContent = result;
}

//plusTwoNumbers()

function minusTwoNumbers() {
  cleanUpInput();
  let result = parseFloat(input1.value) - parseFloat(input2.value);
  outputEl.textContent = result;
}

//minusTwoNumbers()

function divideTwoNumbers() {
  cleanUpInput();
  let result = parseFloat(input1.value) / parseFloat(input2.value);
  outputEl.textContent = result;
}

//divideTwoNumbers()

function cleanUpInput() {
  if (input1.value === "" || input2.value === "") {
    throw new Error(
      "One or both of the inputs are blank, please enter a value."
    );
  }
}

function timesTwoNumbers() {
  cleanUpInput();
  let result = parseFloat(input1.value) * parseFloat(input2.value);
  outputEl.textContent = result;
}

// react testing does not let you use some JS operators

// count = 0;

// function add() {
//   count += 1;
//   console.log(count);
// }

//timesTwoNumbers()

// function calculations(operator) {
//   cleanUpInput();
//   const check = {
//     "*": parseFloat(input1.value) * parseFloat(input2.value),
//     "-": parseFloat(input1.value) - parseFloat(input2.value),
//     "+": parseFloat(input1.value) + parseFloat(input2.value),
//     "/": parseFloat(input1.value) / parseFloat(input2.value),
//   };

//   outputEl.textContent = check[operator];
