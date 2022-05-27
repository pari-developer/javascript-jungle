function insertionSort(arr){
    //[5,3,4,1,2]
    for(let i = 0 ; i < arr.length - 1;i++){
        for(let j = i+1; j > 0 ; j--){
            if(arr[j]<arr[j-1]){
                [arr[j-1],arr[j]] = [arr[j],arr[j-1]];
            }else {
                break;
            }
        }
    }
    return arr;
}
console.log(insertionSort([5,3,4,1,2]));