// Use prompt for your input
// Use if,else,else if conditions
// use alert for your output

const FirstNumber = parseFloat(prompt("Enter First Number: "));
const Operator = prompt(
  "Please Enter the operator you want to perform \n eg +,-,*,/"
);
const SecondNumber = parseFloat(
  prompt(FirstNumber + " " + Operator + " " + "\n Enter Second Number: ")
);

let result;

if (Operator === "+") {
  result = FirstNumber + SecondNumber;
} else if (Operator === "-") {
  result = FirstNumber - SecondNumber;
} else if (Operator === "*") {
  result = FirstNumber * SecondNumber;
} else if (Operator === "/") {
  result = FirstNumber / SecondNumber;
} else {
  alert("Incorrect operator");
}

alert("The result is: " + result);
