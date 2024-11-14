function swap(i, j, nums) {
    let aux = nums[i];

    nums[i] = nums[j];
    nums[j] = aux;
};

// Approach 1:
// "Bubble" the greatest number to the end of the array
// by comparing subsequent items at a time

function bubbleSort1(nums) {
    // Time: O(n^2)
    // Space: O(1)
    for (let i=0; i<nums.length; i++) {
        for (j=1; j<nums.length-i; j++) {
            if (nums[j-1] > nums[j])
                swap(j-1, j, nums);
        }
    }
    return nums;
};

// Approach 2:
// "Bubble" the lowest number to the start of the array
// by comparing subsequent items at a time

function bubbleSort2(nums) {
    // Time: O(n^2)
    // Space: O(1)
    for (let i=0; i<nums.length; i++) {
        for (let j=nums.length-2; j>=0+i; j--) {
            if (nums[j+1] < nums[j])
                swap(j, j+1, nums);
        }
    }
    return nums;
};

// For every position in the array starting from zero
//      Search the lowest value and swap it with the current position
function selectionSort(nums) {
    // Time: O(n^2)
    // Space: O(1)
    let lowestIndex;

    for (let i=0; i<nums.length-1; i++) {
        lowestIndex = i;
        for (let j=i+1; j<nums.length; j++) {
            if (nums[j] < nums[lowestIndex])
                lowestIndex = j; 
        }
        swap(i, lowestIndex, nums);
    }
    return nums;
};

// For every position in the array starting from zero
//      Insert the i-th number in its corresponding position
//      within the subarray from zero to i
function insertionSort(nums) {
    // Time: O(n^2)
    // Space: O(1)
    let j;

    for (let i=1; i<nums.length; i++) {
        j = i;
        while (j>0 && nums[j] < nums[j-1]) {
            swap(j, j-1, nums);
            j--;
        }
    }
    return nums;
};

let nums1;

//nums1 = [6,5,3,1,8,7,2,4];
//console.log(bubbleSort1(nums1));
//nums1 = [6,5,3,1,8,7,2,4];
//console.log(bubbleSort2(nums1));
//nums1 = [6,5,3,1,8,7,2,4];
//console.log(selectionSort(nums1));
nums1 = [6,5,3,1,8,7,2,4];
nums1 = [99,44,6,2,1,5,63,87,283,4,0];
console.log(insertionSort(nums1));