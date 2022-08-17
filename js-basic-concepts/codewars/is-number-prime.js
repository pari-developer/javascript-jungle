function isPrime(num) {
    if(num <=1)return false;
   
     for(let i = 2, s = Math.floor(Math.sqrt(num)); i <= s; i++){
       if(num % i == 0) return false;
     }
     return true;
   }
   