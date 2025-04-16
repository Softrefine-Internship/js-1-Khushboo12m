// Write a JavaScript program to find the most frequent item in an array.

// Sample input : [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
// Expected Output : console.log(a, "5 times")


function MostFrequent(arr) {
  let freqMap = {};
  let maxCount = 0;

  for (let item of arr) {
    freqMap[item] = (freqMap[item] || 0) + 1;
    if (freqMap[item] > maxCount) {
      maxCount = freqMap[item];
    }
  }

  let mostFrequentItems = [];
  for (let item in freqMap) {
    if (freqMap[item] === maxCount) {
      mostFrequentItems.push(item);
    }
  }

  mostFrequentItems.forEach(item => {
    console.log(item, `"${maxCount} times"`);
  });
}

let sampleArray = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
MostFrequent(sampleArray);