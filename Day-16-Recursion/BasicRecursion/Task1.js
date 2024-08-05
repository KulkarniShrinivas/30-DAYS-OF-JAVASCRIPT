
//Write a recursive function to calculate the factorial of a number. log the result for few test cases.

function factorial(n){
    
    if(n === 0){
        return 1;
    }
    return n * factorial(n-1);
}

console.log(factorial(5)); 