
function bubbleSort(arr){
    for(let i = 0 ; i < arr.length; i++) {
         let swapped = false;
        for(let j = 1; j < arr.length-i; j++) {
        if(arr[j] < arr[j-1]){
            [arr[j],arr[j-1]] = [arr[j-1],arr[j]]
            swapped = true;
            console.log(arr);
        }
     }
     if(!swapped) break;
    }
    return arr;
}
console.log(bubbleSort([3,2,1,5,4]));


