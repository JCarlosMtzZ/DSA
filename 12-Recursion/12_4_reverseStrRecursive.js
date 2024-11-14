function reverseRecursive(str) {
    // Time: O(n^2)
    // Space: O(n)

    if (str.length === 1)
        return str;

    return str[str.length-1] + reverseRecursive(str.slice(0, str.length-1));
};

console.log(reverseRecursive('string'));