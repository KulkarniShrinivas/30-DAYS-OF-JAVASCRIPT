
//Write a function that memoizes the results of another function. 
//Use a closure to store the results of previous computations

function memoizes(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);
        if (cache[key]) {
            console.log('Changing from cache');
            return cache[key];
        } else {
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}

function add(a, b) {
    return a + b;
}

const memoizedAdd = memoizes(add);
console.log(memoizedAdd(1, 2)); // Logs: 3
console.log(memoizedAdd(1, 2)); // Logs: Changing from cache 3
console.log(memoizedAdd(2, 3)); // Logs: 5
console.log(memoizedAdd(2, 3)); // Logs: Changing from cache 5
console.log(memoizedAdd(1, 2)); // Logs: Changing from cache 3
console.log(memoizedAdd(2, 3)); // Logs: Changing from cache 5