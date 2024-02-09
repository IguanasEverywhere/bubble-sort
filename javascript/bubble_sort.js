function bubbleSort(arr) {
  // have a pointer var pointing at first element
  // while pointer is not pointing at last value:
  // compare value at pointer to value at pointer + 1
  // if value at pointer > value at pointer + 1, swap and return pointer to beginning
  // else increment pointer
  // arr

  if (arr.length === 0) {
    return arr;
  }

  let pointer = 0;
  while (pointer !== arr.length - 1) {
    if (arr[pointer] > arr[pointer + 1]) {
      // let temp = arr[pointer];
      // arr[pointer] = arr[pointer + 1];
      // arr[pointer + 1] = temp;
      [arr[pointer], arr[pointer + 1]] = [arr[pointer + 1], arr[pointer]]
      pointer = 0;
    } else {
      pointer++;
    }
  }

  return arr;

}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));


  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));

  console.log("");

  console.log("Expecting: [1, 2, 2, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 2, 2, 1]));
}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
