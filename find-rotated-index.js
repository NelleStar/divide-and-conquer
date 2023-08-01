function findRotatedIndex(arr, num) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === num) {
      return middle;
    }

    // Check if num is outside the range from arr[left] to arr[middle]
    else if (arr[left] <= arr[middle]) {
      if (num >= arr[left] && num < arr[middle]) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    // Check if num is outside the range from arr[middle] to arr[right]
    else {
      if (num > arr[middle] && num <= arr[right]) {
        left = middle + 1;
      } else {
        right = middle - 1;
      }
    }
  }

  return -1;
}

console.log(findRotatedIndex([3, 4, 1, 2], 4)); // Output: 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // Output: 2
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // Output: 6
console.log(findRotatedIndex([37, 44, 66, 102, 10, 22], 14)); // Output: -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // Output: -1


// module.exports = findRotatedIndex
