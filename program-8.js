// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.



function insertDashes(numberStr) {
  let result = "";

  for (let i = 0; i < numberStr.length; i++) {
    result += numberStr[i];

    if (
      i < numberStr.length - 1 &&
      parseInt(numberStr[i]) % 2 === 0 &&
      parseInt(numberStr[i + 1]) % 2 === 0
    ) {
      result += "-";
    }
  }

  return result;
}

let input = "025468";
let output = insertDashes(input);
console.log(output);
