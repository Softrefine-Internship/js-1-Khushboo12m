// Write a JavaScript program that accepts a number as input and inserts dashes (-) between each even number.

// Sample input: 025468
// Expected output: 0-254-6-8.



function insertDashes(input) {
  let numberStr = input.toString();
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

let input1 = "025468";     // string
let input2 = 25420168;     // number
console.log(insertDashes(input1));
console.log(insertDashes(input2)); 

