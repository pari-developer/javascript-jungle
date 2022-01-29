//Input = "III"
//Output = 3

const romanHash = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000
};

function romanToInt(s) {
    let start = 0;
    let end = s.length;
    let sum = 0;
    while (start < end) {
        let curr = romanHash[s[start]];
        let next = romanHash[s[start + 1]];
        if (curr < next) {
            sum += next - curr;
            start += 1;
        } else {
            sum += curr;
        }
        start++;
    }
    return sum;
}