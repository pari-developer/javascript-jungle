// https://leetcode.com/problems/split-array-largest-sum

function splitArray(nums, m) {
    /*Largest sum will be atleast as large as the largest number in nums*/
    let start = Math.max(...nums);
    /*Largest sum that will be possible is the sum of all the nums*/
    let end = nums.reduce((a, b) => a + b, 0);
    while (start <= end) {
        /*If midS is the sum that we are trying to achieve then how many splits are required*/
        let splitsNumber = 1;
        let currentSum = 0;
        let mid = Math.floor((start + end) / 2);
        for (let num of nums) {
            /*Keep adding to currSum*/
            currentSum += num;
            if (currentSum > mid) {
                splitsNumber += 1;
                currentSum = num;
            }
        }
        /*If number of splits is greater than m that means midS is 
        too small so increase it by setting startS to midS + 1*/
        if (splitsNumber > m) {
            start = mid + 1;
        } else {
        /*Number of splits are less than equal to m that means midS can be achieved using m splits
        so try to minimize it since need to minimize the largest sum*/
            end = mid - 1;
        }
    }
    return start;
};