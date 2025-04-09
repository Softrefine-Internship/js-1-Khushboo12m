// Write a JavaScript program to compute the union of two arrays.

// Sample input:
// arr1 = [1, 2, 3]
// arr2 = [100, 2, 1, 10];

// Expected Output: c = [1, 2, 3, 10, 100]




 function arrayUnion(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr1[i]);
    }
  }

  for (let i = 0; i < arr2.length; i++) {
    let found = false;
    for (let j = 0; j < arr1.length; j++) {
      if (arr2[i] === result[j]) {
        found = true;
        break;
      }
    }
    if (!found) {
      result.push(arr2[i]);
    }
  }

  return result;
}


let arr1 = [1, 2, 3];
let arr2 = [100, 2, 1, 10];

let c = arrayUnion(arr1, arr2);
console.log("Expected Output:", c);