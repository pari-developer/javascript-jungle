//Consider an array of distinct numbers sorted in increasing order. 
//The array has been rotated (clockwise) k number of times. Given such an array, find the value of k.
//Input : arr[] = {15, 18, 2, 3, 6, 12}
//Output: 2

function countRotations(arr){
   let Pivot = findPivot(arr);
   if(Pivot === -1){
       return 0;
   }
    return Pivot+1
   
}

function findPivot(array) {
 let start = 0;
 let end = array.length - 1;
 while(start < end){
     let mid = Math.floor((start + end)/2);
     if(mid < end && array[mid] > array[mid+1]){
         return mid ; 
     }else if( mid > start && array[mid]<array[mid-1]){
         return mid-1;
     }else if(arr[start] > arr[mid]){
         end = mid - 1
     }else {
         start + 1;
     }
 }
 return -1;
}