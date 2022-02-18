//Infinite Currying

function add(a){
    return function(b) {
      if(b){
          return add(a+b);
      } else {
        return a ;
      }
    }
}
console.log(add(5)(2)(4)(5)())

//Using ES6 syntax
const add = a => b => b ? add(a+b):a ;