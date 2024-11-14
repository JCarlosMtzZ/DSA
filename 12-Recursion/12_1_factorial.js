function factorialRecursive(n) {
    // Time: O(n)
    // Space: O(n)
    // Base case:
    //      When n is less or equal than 1, return 1
    // Recursive case:
    //      When n is greater than 1, return n * function(n-1)

    if (n <= 1)
        return 1;

    return n * factorialRecursive(n-1);
};

function factorialIterative(n) {
    // Time: O(n)
    // Space: O(1)
    // If n is less or equal than 1, return 1
    // Initialize the result at 1
    // Loop from 2 to n
    //      Multiply i by the result
    // Return the result

    if (n <= 1)
        return 1;

    let result = 1;
    for (let i=2; i<=n; i++) {
        result *= i;
    }
    return result;
};

for (let i=0; i<=10; i++) {
    console.log(factorialRecursive(i));
    console.log(factorialIterative(i));
    console.log('-----');
}