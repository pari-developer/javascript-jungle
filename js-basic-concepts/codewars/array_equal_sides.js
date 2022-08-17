
// You are going to be given an array of integers. 
// Your job is to take that array
//  and find an index N where 
//  the sum of the integers to the left of N is equal to the sum of the integers to the right of N. 
//  If there is no index that would make this happen, return -1.


function findEvenIndex(arr) {
    //Code goes here!
    // LOOP THROUGH INDEX
    for (var i = 0; i < arr.length; i++) {
        var j = arr.slice(0, i);
        var l = arr.slice(i + 1, arr.length);
        // ADD THE LEFT SIDE AND THE RIGHT SIDE 
        function add(a, b) {
            return a + b
        }
        var sumLeft = j.reduce(add, 0);

        var sumRight = l.reduce(add, 0);

        // DOES IS EQUAL THE SAME 
        if (sumLeft === sumRight) {
            return i
        };
        if (i === arr.length - 1 && sumLeft !== sumRight) {
            return -1
        }
    }
}

function findEvenIndex(arr) {
    var leftsum = 0;
    var rightsum = 0;
    for (var i = 0; i < arr.length; i++) {
        rightsum += arr[i];
    }
    for (i = 0; i < arr.length; i++) {
        rightsum -= arr[i];
        if (leftsum === rightsum) return i;
        leftsum += arr[i];
    }
    return -1;
}