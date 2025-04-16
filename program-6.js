// Merge two arrays and remove duplicate items from the merged array in JavaScript.

// Sample input:
// arr1 = [1, 2, 3, 4, 5, 6];
// arr2 = [3, 4, 5, 7];

// Expected output: [1, 2, 3, 4, 5, 6, 7]



let arr1 = [1, 2, 3, 4, 5, 5, 6];
let arr2 = [3, 4, 5, 7];

function removeDuplicate(arr1, arr2) {
  let merged = [];

  for (let i = 0; i < arr1.length; i++) {
    merged[merged.length] = arr1[i];
  }

  for (let i = 0; i < arr2.length; i++) {
    merged[merged.length] = arr2[i];
  }

  let unique = [];
  for (let i = 0; i < merged.length; i++) {
    let exists = false;
    for (let j = 0; j < unique.length; j++) {
      if (merged[i] === unique[j]) {
        exists = true;
        break;
      }
    }
    if (!exists) {
      unique[unique.length] = merged[i];
    }
  }

  console.log(unique);
}

removeDuplicate(arr1,arr2);
