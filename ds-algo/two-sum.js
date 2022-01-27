//nums = [3,2,4], target = 6
//output = [1,2]

// time complexity - O(n^2)
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        let targetNumber = target - nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] == targetNumber) {
                return [i, j];
            }
        }
    }
}

// using hashing
// time complexity - O(n)
// space complexity - O(n)
function twoSum(nums, target) {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        let targetNumber = target - nums[i];
        if (targetNumber in obj) {
            return [obj[targetNumber], i]
        }
        obj[nums[i]] = i;
    }
}


