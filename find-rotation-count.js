function findRotationCount(arr) {
  let left = 0;
  let right = arr.length - 1;

  // Check if the array is already sorted (no rotation)
  if (arr[left] <= arr[right]) {
    return 0;
  }

  while (left <= right) {
    // If the subarray is already sorted, return the count of rotations
    if (arr[left] <= arr[right]) {
      return left;
    }

    let middle = Math.floor((left + right) / 2);

    // Check if the middle element is less than or equal to the element at the right index
    // If true, it means rotation is to the left of the middle element
    if (arr[middle] <= arr[right]) {
      right = middle;
    } else {
      // If false, it means rotation is to the right of the middle element
      left = middle + 1;
    }
  }

  return -1; // Return -1 if there is an error or the array is not rotated.
}

console.log(findRotationCount([15, 18, 2, 3, 6, 12])); // Output: 2
console.log(findRotationCount([7, 9, 11, 12, 5])); // Output: 4
console.log(findRotationCount([7, 9, 11, 12, 15])); // Output: 0
