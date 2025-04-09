// Write javascript function which takes nested array as an argument and returns flatten array as output.

// Sample Input: [1, 2, [3, 4], [5, [6, 7]]];
// Expected Output: [1, 2, 3, 4, 5, 6, 7];


// flattenarray =[1, 2, [3, 4], [5, [6, 7]]];
// nestedarray=[];

let exampleArray =  [1, 2, [3, 4], [5, [6, 7]]];
let flatarr = [];

function ReturnFlattenArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      ReturnFlattenArray(arr[i]);
    } else {
      flatarr.push(arr[i]);
    }
  }
}

ReturnFlattenArray(exampleArray);
console.log("flattened Array:", flatarr); 

