let nums = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
let nums2 = [10, 47, 32, 6, 50];

// First put the pivot "in the middle", then
// sort left and right sides
function quickSort(array, left, right) {
    // Time: O(nlogn):
    //                * n -> comes from the partition step
    //                * logn -> comes from spliting the array every call
    //                * becomes n^2 if the resulting partitions are unbalanced
    // Space: O(logn) -> comes from the recursion stack
    if (right <= left)
        return;

    let pivotIndex = partition(array, left, right);

    quickSort(array, left, pivotIndex-1);
    quickSort(array, pivotIndex+1, right);
};

// Puts the values that are lower and greater than the pivot
// to their corresponding side within the partition of the array
// delimited by left and right
function partition(array, left, right) {
    // Time: O(n)
    // Space: O(1)

    // * Pivot is always going to be left
    // * storeIndex is the index that a lower value
    //   will be swapped to, starting at left + 1
    
    let storeIndex = left + 1;
    
    for (let i=left+1; i<=right; i++) {
        if (array[i] <= array[left]) {
            swap(array, i, storeIndex);
            storeIndex++;
        }
    }
    swap(array, left, storeIndex-1);

    return storeIndex-1;
};

// Swaps the values of the array at the given indexes
function swap(array, firstIndex, secondIndex) {
    let temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
};

quickSort(nums, 0, nums.length-1);
quickSort(nums2, 0, nums2.length-1);

console.log(nums);
console.log(nums2);