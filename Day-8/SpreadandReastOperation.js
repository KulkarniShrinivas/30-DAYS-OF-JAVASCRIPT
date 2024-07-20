

//Use the spread operator to create a new aray that includes all elements of an existing array
//plus additional elements, and log the new array to the console

console.log("Spread Operator Example:");

var numbers = [1,2,3,4,5];
var newNumbers = [...numbers, 6,7,8,9,10];
console.log(newNumbers);


//Use the rest Operator in a function to accept an arbitary number of arguments, sum them and return the result

console.log("Rest Operator Example:");

function sum(...args){
    return args.reduce((s,b) => s+b, 0);
}

console.log(sum(1,2,3,4,5,6,7,8,9,10));