//str = "A man, a plan, a canal: Panama"
//output = true

function isPalindrome(s) {
    if (s.length == 1) return true;
    let reg = /[^A-Za-z0-9/s]/g;
    s = s.replace(reg, "").toLowerCase();
    let start = 0;
    let end = s.length - 1;
    while (start < end) {
        if (s[start] !== s[end]) {
            return false;
        }
        start++;
        end--;
    }
    return true;
}

