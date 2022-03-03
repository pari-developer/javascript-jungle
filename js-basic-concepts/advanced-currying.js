// Note :
// function test (a,b,c){
//     alert(a);
//     alert(b);
//     alert(c);
// }
// Trying to call test with an array not indivisual argumemts
// let arr =[1,2,3];
// test(arr);
// This is not going to work as 'a' will get the value of array and rest of the parameters will be undefined.
// To make this work we can write i.e. test.apply(this,arr)

function currying(fn) {
    return function partialCurry(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function (...args1) {
                return partialCurry.apply(this, args.concat(args1))
            }

        }
    }

}

const totalSum = (a, b, c) => {
    return a + b + c;
}

let curryFn = currying(totalSum);
curryFn(2)(3)(4);