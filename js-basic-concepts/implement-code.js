//Implement the code below :

const result = calc.add(10).multiply(5).subtract(30).add(10);
console.log(result.total);

//Solution 
const calc = {
    total: 0,

    add(a) {
        this.total = this.total + a;
        return this;
    },

    multiply(b) {
        this.total = this.total * b;
        return this;
    },

    subtract(c) {
        this.total = this.total - c;
        return this;
    }

}