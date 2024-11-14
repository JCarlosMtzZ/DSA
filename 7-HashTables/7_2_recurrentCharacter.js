// First recurring character

let array1 = [2, 5, 1, 2, 3, 5, 1, 2, 4];
// Output: 2

let array2 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
// Output: 1

let array3 = [2, 3, 4, 5]
// Output: undefined

function recurringCharacter(arr) {
    // Time: O(n)
    // Space: O(n)
    // Declare a hash table
    // Iterate through the array:
    //      Check if the current item is in the hash table
    //      Yes, return current item
    //      No, add current as a key with value 1
    // Return undefined

    let len = arr.length;

    if (len <= 1)
        return undefined;

    let ht = {};
    let current;

    for (let i=0; i<len; i++) {
        current = arr[i];
        if (ht[current])
            return current;
        ht[current] = 1;
    }

    return undefined;
}

console.log(recurringCharacter(array1));
console.log(recurringCharacter(array2));
console.log(recurringCharacter(array3));