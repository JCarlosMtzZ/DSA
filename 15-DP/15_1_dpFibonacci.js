let calculations = 0;
let dpCalculations = 0;

function fib(n) {
    if (n <= 1)
        return n;
    calculations++;
    return fib(n-1) + fib(n-2);
};

function memoizedFibonacci() {
    let cache = {};
    return function fibonacci(n) {
        if (n <= 1)
            return n;
        if (!(n in cache)) {
            dpCalculations++;
            cache[n] = fibonacci(n-1) + fibonacci(n-2);
        }
        return cache[n];
    };
};

const memoized = memoizedFibonacci();

console.log(fib(43));
console.log(memoized(43));
console.log('Calculations: ', calculations);
console.log('DPCalculations: ', dpCalculations);
