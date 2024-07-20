

//Write a function that takes two parameters and return their product, with the second parameter having a default value of 1,
//Log the result of calling this function with and without the second parameter


console.log("Default Parameters Example:");

function product(a, b=1){
    return a*b;


}
console.log(product(5, 10));
console.log(product(5));
