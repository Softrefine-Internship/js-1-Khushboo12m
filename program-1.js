// Write a JavaScript program to clone an array.

arr1= [20,30,40];
arr2=[];

function ReturnClonedArray(arr1,arr2) {
  for(let i=0;i<=arr1[i];i++){
    arr2.push(arr1[i]);
  }
  return arr2;
}

console.log(ReturnClonedArray(arr1,arr2));
