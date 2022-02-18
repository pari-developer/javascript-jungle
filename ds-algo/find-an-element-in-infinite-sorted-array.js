//https://www.geeksforgeeks.org/find-position-element-sorted-array-infinite-numbers/

//Binary Search Problem 
//Time Complexity 0(log n)
function findRange(array,target){
    let start = 0;
    let end = 1;
    while(target>=array[end]){
        let newStart = end + 1;
        end = end + (end-start+1)*2;
        start = newStart;
    }
 return findElementInArray(start,end,array,target);
}

function findElementInArray(start,end,arr,target){
    while(start<=end){
        let mid = Math.floor((end-start)/2);
        if(target < arr[mid]){
            end = mid-1;
        }else if(target > arr[mid]){
            start = mid+1;
        }else {
            return mid;
        }
    }
}