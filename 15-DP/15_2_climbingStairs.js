// Time: O(n)
// Space: O(n)
function climbStairs() {
    let cache = {}
    return function climb(n) {
        if (n < 3)
            return n;
        if (!(n in cache))
            cache[n] = climb(n-1) + (n-2);
        return cache[n];
    };
};

const fun = climbStairs();

console.log(fun(4));