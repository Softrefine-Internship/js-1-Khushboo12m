// Write javascript program to remove duplicate objects from an array.

// Sample Input:
// array = [
//  { title: "C++", author: "Bjarne" },
//  { title: "Java", author: "James" },
//  { title: "Python", author: "Guido" },
//  { title: "Java", author: "James" },
// ];

// Expected Output:
// [
//  { title: 'C++', author: 'Bjarne' },
//  { title: 'Java', author: 'James' },
//  { title: 'Python', author: 'Guido' }
// ]




let array = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

function removeDuplicateItems(arr) {
  let uniqueArray = [];

  for (let i = 0; i < arr.length; i++) {
    let duplicate = false;

    for (let j = 0; j < uniqueArray.length; j++) {
      if (
        arr[i].title === uniqueArray[j].title &&
        arr[i].author === uniqueArray[j].author
      ) {
        duplicate = true;
        break; 
      }
    }

    if (!duplicate) {
      uniqueArray.push(arr[i]);
    }
  }

  return uniqueArray;
}

let result = removeDuplicateItems(array);
console.log(result);

