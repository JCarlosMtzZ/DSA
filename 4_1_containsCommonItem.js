// Check if two arrays have a common item.

let array1 = ['a', 'b', 'c', 'd'];
let array2 = ['x', 'y', 'z'];

// Time: O(n + m)
// Space: O(m)
function containsCommonItem(arr1, arr2)
{
	let mySet = new Set(arr1);
	for (let i=0; i<arr2.length; i++)
	{
		if (mySet.has(arr2[i]))
			return true;
	}
	return false;
}

console.log(containsCommonItem(array1, array2), array1, array2);
