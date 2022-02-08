 // Input = [1,3,5,6], target = 5
 // Output= 2

//Brute force approach
//Time complexity - O(n)
function searchInsert(nums, target) {
    for(let i = 0; i < nums.length; i++){
        if(nums[i]>=target){
            return i;
        }
    }
    return nums.length;
}

//Binary Search Approach
//Time complexity - O(log n)
function searchInsert(nums, target) {
    let left = 0;
    let right = nums.length;
    while(left<right){
        const middle = Math.floor((left+right)/2);
        if(nums[middle]< target){
         left = middle + 1;
        } else {
         right = middle;
        }
    }
    return left;    
}
