// https://leetcode.com/problems/find-in-mountain-array

function findInMountainArray(target, mountainArr) {
    //find peak element
    let peak = findPeak(mountainArr);
    //find 
    let findStart = searchForTarget(start = 0, peak, target, mountainArr);
    if (findStart !== -1) {
        return findStart;
    }
    return searchForTarget(peak + 1, mountainArr.length() - 1, target, mountainArr);
};

function findPeak(arr) {
    let start = 0;
    let end = arr.length - 1;
    while (start < end) {
        let mid = Math.floor((start + end) / 2);
        if (arr[mid] > arr.get(mid + 1)) {
            end = mid
        } else {
            start = mid + 1;
        }
    }
    return start;
}

function searchForTarget(start,end,target,arr) {
    let isAsc = arr.get(start) < arr.get(end);
    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (target == arr.get(mid)) {
            return mid;
        }
        if(isAsc) {
            if (target < arr.get(mid)) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        } else {
            if (target > arr.get(mid)) {

                end = mid - 1
            } else {
                start = mid + 1;
            }
        }
    }
    return -1;
}
