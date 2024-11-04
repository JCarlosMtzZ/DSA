// It receives two sorted arrays and merges them
// into one sorted array that is returned
function merge(left, right) {
    let merged = [];

    let i = 0;
    let j = 0;

    while (i<left.length && j<right.length) {
        if (left[i] < right[j]) {
            merged.push(left[i]);
            i++;
        } else {
            merged.push(right[j]);
            j++;
        }
    }
    while (i<left.length) {
        merged.push(left[i]);
        i++;
    }
    while (j<right.length) {
        merged.push(right[j]);
        j++;
    }
    return merged;
};

// Base case:
//      If the array has length of 1, return it (it is already ordered)
// Recursive case:
//      Merge the left and right halves, which have already been sorted (call to mergeSort()), of the array

// Time: O(nlogn) ->
//                  The algorithm splits the array (logn)
//                  The algorithm merges both halves (n)
// Space: O(n) -> The algorithm merges into new arrays
function mergeSort(array) {
    let len = array.length;

    if (len === 1)
        return array;

    let mid = Math.ceil(len / 2);

    let left = array.slice(0, mid);
    let right = array.slice(mid);

    return merge(
        mergeSort(left),
        mergeSort(right)
    );
};

const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(mergeSort(numbers));