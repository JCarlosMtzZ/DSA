
//let array1 = [0, 3, 4, 31];
//let array2 = [4, 6, 30];
let array1 = [1, 3, 5, 7];
let array2 = [];

// Time: O(n + m)
// Space: O(n + m)
function mergeSortedArrays(arr1, arr2) {
    // Declare the merge array
    // Iterate until the smallest array has been traversed
    // In every iteration:
    //      Keep track of the current indexes of both arrays
    //      push the smallest value and increment the index
    // Check for the array that has remaining items.
    // Push the remaining items.

    let len1 = arr1.length;
    let len2 = arr2.length;

    if (len1 === 0)
        return arr2;
    if (len2 === 0)
        return arr1;

    let mergeArray = [];
    let i = 0;
    let j = 0;

    while (i < len1 && j < len2) {
        if (arr1[i] < arr2[j]) {
            mergeArray.push(arr1[i]);
            i++;
        } else {
            mergeArray.push(arr2[j]);
            j++;
        }
    }

    if (i === len1) {
        for (let k=j; k<len2; k++)
            mergeArray.push(arr2[k]);
    } else {
        for (let k=i; k<len1; k++)
            mergeArray.push(arr1[k]);
    }

    return mergeArray;
};

console.log(mergeSortedArrays(array1, array2));


