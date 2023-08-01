// find the first occurance of the number
function firstOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let firstOccurrence = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if(arr[middle] === num) {
            firstOccurrence = middle;
            right = middle -1;
        }
        else if (arr[middle] < num) {
            left = middle + 1;
        }
        else {
            right = middle -1;
        }
    }
    return firstOccurrence;
}

// find the last occurance of the number
function lastOccurrence(arr, num) {
    let left = 0;
    let right = arr.length - 1;
    let lastOccurrence = -1;

    while (left <= right) {
        let middle = Math.floor((left + right) / 2);

        if (arr[middle] === num) {
            lastOccurrence = middle;
            left = middle + 1;
        }
        else if (arr[middle] < num) {
            left = middle + 1;
        }
        else {
            right = middle -1;
        }
    }    
    return lastOccurrence;
}


function sortedFrequency(arr, num) {
    const firstIndex = firstOccurrence(arr, num);
    const lastIndex = lastOccurrence(arr, num);

    if (firstIndex === -1 || lastIndex === -1) {
      return 0; // Number not found in the array.
    }

    return lastIndex - firstIndex + 1;
}

console.log(sortedFrequency([1,1,2,2,2,2,3],2)) // 4
console.log(sortedFrequency([1,1,2,2,2,2,3],3))// 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)) // 2
console.log(sortedFrequency([1,1,2,2,2,2,3],4)) // -1
// module.exports = sortedFrequency