// Write a JavaScript function which takes two arrays as an argument and returns merged array in ascending order.

// Sample Input:
// arr1 = [3, 5, 1]
// arr2 = [4, 2]

// Expected output: [1, 2, 3, 4, 5]


let arr1 = [3, 5, 1];
let arr2 = [4, 2];

function mergeAndSort(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  for (let i = 0; i < arr1.length - 1; i++) {
      for (let j = 0; j < arr1.length - i - 1; j++) {
          if (arr1[j] > arr1[j + 1]) {
              let temp = arr1[j];
              arr1[j] = arr1[j + 1];
              arr1[j + 1] = temp;
          }
      }
  }

  return arr1;
}

console.log("Merged and Sorted Array:", mergeAndSort(arr1, arr2));
