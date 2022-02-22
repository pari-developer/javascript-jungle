//https://leetcode.com/problems/search-in-rotated-sorted-array

function search(nums, target) {
    let Pivot = findPivot(nums);
    if( Pivot == -1){
        return binarySearch(start=0,nums.length-1,nums,target);
    }
    if(nums[Pivot] == target){
        return Pivot;
    }
    if(target>=nums[0]){
         return binarySearch(start=0,Pivot-1,nums,target);
    }else {
        return binarySearch(Pivot+1,nums.length-1,nums,target);
    }
    
};

function findPivot(arr){
    let start = 0;
    let end = arr.length - 1;

    while(start <= end){
        let mid = Math.floor((start+end)/2);
        if(mid < end && arr[mid] > arr[mid+1]){
            return mid;
        }else if(mid > start && arr[mid]< arr[mid-1]){
            return mid -1;
        }else if(arr[start] < arr[mid]){
            start = mid + 1;
        }else {
            end = mid - 1;
        }
    }
    return -1;
}

function binarySearch(start,end,arr,target){
    while(start<=end){
    let mid = Math.floor((start+end)/2);
        if(arr[mid] == target){
            return mid;
        }
        if(arr[mid] > target){
            end = mid -1;
        }else{
            start = mid + 1;
        }
    }
    return -1;
}