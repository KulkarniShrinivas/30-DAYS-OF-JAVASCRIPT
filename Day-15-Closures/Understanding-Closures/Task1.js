// Write a function that returns another function where the inner function accesses a variable from the outer function's scope. Call the inner function and log the result.

function outerFunction() {
    let outerVariable = 'I am the outer variable';
    
    function innerFunction() {
        console.log(outerVariable);
    }
    
    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); 

