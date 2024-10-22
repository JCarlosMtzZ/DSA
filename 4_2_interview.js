// Check if there is a pair of numbers that sum a target value.

// Input: Array of positive integers, target value.

array1 = [1, 2, 3, 9];
target1 = 8;

array2 = [1, 2, 4, 4];
target2 = 8;

// Time: O(n^2)
// Space: O(1)
function containsPair1(array, target) {
    for (i=0; i<array.length; i++) {
        for (j=i+1; j<array.length; j++) {
            if (array[i] + array[j] === target)
                return true;
        }
    }
    return false;
}

// Time: O(n)
// Space: O(n)
function containsPair2(array, target) {
    // declare a set
    // iterate through the array
    // in every iteration:
    //     check if the current value is in the set
    //     if yes, return true, if not, add the complement to the set
    // return false

    let numsSet = new Set();
    
    for (let i=0; i<array.length; i++) {
        if (numsSet.has(array[i]))
            return true;
        numsSet.add(target-array[i]);
    }

    return false;
}

console.log(containsPair1(array1, target1));
console.log(containsPair2(array1, target1));
console.log(containsPair1(array2, target2));
console.log(containsPair2(array2, target2));

