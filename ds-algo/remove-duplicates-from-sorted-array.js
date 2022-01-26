//nums = [0,0,1,1,1,2,2,3,3,4]
//output = [0,1,2,3,4]

// with extra space
// time complexity - O(n)
// space complexity - O(n)
function removeDuplicates(nums){
    if(nums.length == 0) return 0;
    let temp = [];
    let j = 0;
    for(let i=1; i<nums.length-1;i++){
      if(nums[i]!== nums[i+1]){
          temp[j] = nums[i];
          j++;
      }
    }
    temp[j]=nums[nums.length-1]
}

//without extra space
// time complexity - O(n)
function removeDuplicates(nums){
    if(nums.length == 0) return 0;
    let j = 0;
    for(let i=0; i<nums.length-1;i++){
        if(nums[i]!== nums[i+1]){
            nums[j] = nums[i];
            j++;
        }
      }
      nums[j]=nums[nums.length-1]
}

//Two pointer approach
// time complexity - O(n)
// space complexity - O(1)
function removeDuplicates(nums){
    if(nums.length == 0) return 0;
    let i = 0;
    let j = 1;
    while(j < nums.length){
        if(nums[i]!==nums[j]){
            i++;
            nums[i]=nums[j];
        }
        j++;
    }
}