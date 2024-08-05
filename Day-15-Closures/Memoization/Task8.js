
//Create a memoized version of a function that calculates the factorial of a numbers

function memoizeFactorial() {
    let cache = {};
    
    return function factorial(n) {
        if (n in cache) {
            return cache[n];
        } else {
            if (n === 0) {
                return 1;
            } else {
                cache[n] = n * factorial(n - 1);
                return cache[n];
            }
        }
    };
}

const memoizedFactorial = memoizeFactorial();
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(6)); // Logs: 720
console.log(memoizedFactorial(6)); // Logs: 720
console.log(memoizedFactorial(5)); // Logs: 120
console.log(memoizedFactorial(6)); // Logs: 720

