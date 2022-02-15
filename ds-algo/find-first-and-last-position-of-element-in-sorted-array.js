// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/
// Time complexity = O(log n)
function searchRange(nums, target) {
    let ans = [-1, -1];
    let start = findTargetIndex(nums, target, findFirstIndex = true);
    let end = findTargetIndex(nums, target, findFirstIndex = false);
    ans[0] = start;
    ans[1] = end;
    return ans;
}

function findTargetIndex(nums, target, findFirstIndex) {
    let ans = -1;
    let start = 0;
    let end = nums.length - 1;
    let mid = Math.floor(start + (end - start) / 2);
    while (start <= end) {
        if (target < nums[mid]) {
            end = mid - 1;
        } else if (target > nums[mid]) {
            start = mid + 1;
        } else {
            ans = mid;
            if (findFirstIndex) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }

    }
    return ans;
}