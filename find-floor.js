function findFloor(arr, num) {
    let left = 0;
    let right = arr.length - 1;

    if (num < arr[left]) {
        return -1;
    }

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)

        if (arr[middle] === num) {
            return arr[middle];
        }
        else if(arr[middle] < num) {
            left = middle + 1;
        }
        else if(arr[middle] > num) {
            right = middle - 1;
        }
    }
    return arr[right]
}


console.log(findFloor([1,2,8,10,10,12,19], 9)) // 8
console.log(findFloor([1,2,8,10,10,12,19], 20)) // 19
console.log(findFloor([1,2,8,10,10,12,19], 0)) // -1


// module.exports = findFloor