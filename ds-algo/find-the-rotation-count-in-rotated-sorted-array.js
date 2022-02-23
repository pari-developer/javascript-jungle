//Consider an arr of distinct numbers sorted in increasing order. 
//The arr has been rotated (clockwise) k number of times. Given such an arr, find the value of k.
//Input : arr= [15, 18, 2, 3, 6, 12]
//Output: 2

function countRotations(arr) {
    let pivot = findPivot(arr);
    if (pivot === -1) {
        return 0;
    }
    return pivot + 1

}

function findPivot(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (mid < end && arr[mid] > arr[mid + 1]) {
            return mid;
        }
        if (mid > start && arr[mid] < arr[mid - 1]) {
            return mid - 1;
        }

        if (arr[start] > arr[mid]) {
            end = mid - 1
        } else {
            start + 1;
        }
    }
    return -1;
}