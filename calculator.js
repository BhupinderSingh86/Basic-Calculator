/* 
User flow
- user inputs a value (Number) into the input field 1 and input field 2.
- then clicks on buttons (choice of plus/times/divide/minus) to give an output.
- result displayed below in total. 

elements we will interact with
- input fields
- plus button
- total span

functions required
- plusTwoNumbers
*/

let input1 = document.querySelector("#firstInput");
let input2 = document.querySelector("#secondInput");
let outputEl = document.querySelector("#total");
let firstNumber = document.querySelector("#firstNumber");
// read values from input field 1 and 2
// plus the two values to give a total output
// store it as a variable
// use variable  to be stored in textcontent for total element

let showNumber1 = (firstNumber.textContent = "hello");

function plusTwoNumbers() {
  // if either of the inputs are blank throw an error

  if (input1.value === "" || input2.value === "") {
    throw new Error(
      "One or both of the inputs are blank, please enter a value."
    );
  }

  let result = parseFloat(input1.value) + parseFloat(input2.value);
  showNumber1 = input1.value;
  outputEl.textContent = result;
}

//get the value from input field 1
//display it as the text above
