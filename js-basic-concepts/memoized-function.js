const clumpsysquare = (num1,num2) =>{
for(let i =0; i<=1000000; i++) {}
    return num1 * num2;
};

// Create a memoize function !

function myMemoize(fn,context) {
    const res = {};
    return function(...args){
        let argsCache = JSON.stringify(args);
        if(!res[argsCache]){
            res[argsCache] = fn.call(context||this,...args);
        }
        return res[argsCache];
    }
}

const myfunc = myMemoize(clumpsysquare);

//with using memoization
console.time("First Call");
console.log(myfunc(9999,9999));
console.timeEnd("First Call");


console.time("Second Call");
console.log(myfunc(9999,9999));
console.timeEnd("Second Call");


//without using memoization
console.time("First Call");
console.log(clumpsysquare(9999,9999));
console.timeEnd("First Call");

console.time("Second Call");
console.log(clumpsysquare(9999,9999));
console.timeEnd("Second Call");


