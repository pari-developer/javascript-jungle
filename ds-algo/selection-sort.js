function selectionSort(arr) {
//find the maximum element and swap it with the last element
//then find the second maximum element and then swap it with the second last element
//keep on doing this till your entire array is sorted
  for(let i = 0 ; i < arr.length ; i++ ){
      let lastIndex = arr.length-i-1;
      let maxIndex = findMaxIndex(arr,0,lastIndex);
      swapValues(arr,maxIndex,lastIndex);
  }
}

function findMaxIndex(arr,start,last){
    let maxIn = start;
    for(let i=start; i<arr.length;i++){
        if(arr[i] > arr[maxIn]){
            maxIn = i;
        }
    }
  return maxIn;
}

function swapValues(arr,maxNum,LastNum){
 return [arr[maxNum],arr[LastNum]] = [arr[LastNum],arr[maxNum]];
}