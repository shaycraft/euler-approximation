const prompt = require("prompt-sync")({ sigInt: true });
const printFunctionForm = require("./print-function-form");

function init() {
  const n = prompt("Enter number of variables: ");

  console.log("You got " + n + " variables fool!");
  console.log(printFunctionForm(+n));
}

init();
