let oldArray = [[1], [2, 3], [4], [5, 6, [7]]];
let newArray = [].concat(...oldArray);
let newArr = oldArray.flat(2);
console.log(newArray);

//The above solution will only work on one level. It wont work on multiple nested levels.

//Write a custom function which can flatten multiple levels(dynamically) Array.flat method
function customFlat(arr,depth=1) {
    let result = [];
    arr.forEach((ar)=>{ 
        if(Array.isArray(ar) && depth > 1){
          result.push(...customFlat(ar,depth-1))
        }else {
           result.push(ar)
        }
    });
 return result;
}

console.log(customFlat([1,2,3,5,[6,[8]]],3));

