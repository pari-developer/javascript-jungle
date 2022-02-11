// Input = [2,3,5,9,14,16,18], Target = 15
// Output = 16

//Binary Search Approach
//Time complexity - O(log n)
function findCeiling(arr,target){
    let start = 0;
    let end = arr.length-1;
    while(start<=end){
        let mid = Math.floor((start+end)/2);
        if(arr[mid]>target){
            end = mid-1
        }else if(arr[mid]<target){
            start = mid+1;
        }else {
            return arr[mid];
        }
    }
  return arr[start];
}

