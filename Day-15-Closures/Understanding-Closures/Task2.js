// Create a closure that maintains a private counter. Implement functions to increment and get the current value of the counter.

function counter() {
    let counter = 0;
    
    return {
        increment: function() {
            counter++;
        },
        getCounter: function() {
            return counter;
        }
    };
}

const counter1 = counter();
counter1.increment();
console.log(counter1.getCounter()); // Logs: 1
counter1.increment();
console.log(counter1.getCounter()); // Logs: 2