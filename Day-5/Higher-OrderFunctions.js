

//higher-order function that takes a function and a number and calls the function that many times 

let n9 = 5;
let n10 = 10;

function product(n9, n10){
    return n9*n10;
}

function callFunction(n, func){
    for(let i=0; i<n; i++){
        console.log(func(n9, n10));
    }
}


callFunction(5, product);

    

//higher order function taht takes two functions and a value applies the first function to the value and then applies the second function on the result

let n11 = 5;
let n12 = 10;

function product1(n11, n12){
    return n11*n12;
}

function square(n){
    return n*n;
}

function applyFunctions(n, func1, func2){
    let result = func1(n11, n12);
    console.log(func2(result));


}

callFunction(5, product);

applyFunctions(5, product1, square);

