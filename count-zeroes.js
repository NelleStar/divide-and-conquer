function countZeroes(arr) {
// left is set to zero, right is set to the length of the array, count is set to zero
  let left = 0;
  let right = arr.length - 1;
  let firstZeroIndex = -1
  let totalZero = 0;

// while loop to go through the array
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);

    if (arr[middle] === 0) {
        // if the middle is 0 then we change firstZeroIndex to the middle and update right to be middle minus 1 to back up in the array to find the first instance of 0 - the while loop ensures that we continue this until left is <+ to right

        firstZeroIndex = middle;
        right = middle - 1;
    } else {
        // We move the left index further into the array to find 0s
        left = middle + 1;
    }
  }

// if we didn't find any 0s return 0   
  if (firstZeroIndex === -1) {
    return 0;
  }

  totalZero = arr.length - firstZeroIndex;
  return totalZero;
}

console.log(countZeroes([1,1,1,1,0,0])) // 2
console.log(countZeroes([1,0,0,0,0])) // 4
console.log(countZeroes([0,0,0])) // 3
console.log(countZeroes([1,1,1,1])) // 0

// module.exports = countZeroes