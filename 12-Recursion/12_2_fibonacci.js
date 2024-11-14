function fibonacciIterative(n) {
    // TIme: O(n)
    // Space: O(1)

    if (n <= 1)
        return n;

    let previous = 0;
    let current = 1;
    let aux;

    for (let i=0; i<n-1; i++) {
        aux = current;
        current += previous;
        previous = aux;
    };

    return current;
};

function fibonacciRecursive(n) {
    // Time: O(2^n)
    // Space: O(n)

    if (n <= 1)
        return n;

    return fibonacciRecursive(n-1) + fibonacciRecursive(n-2);
};

for (let i=0; i<=10; i++) {
    console.log(fibonacciIterative(i));
    console.log(fibonacciRecursive(i));
    console.log('-----');
}