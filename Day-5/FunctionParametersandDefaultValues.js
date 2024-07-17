

//function that takes two parameters and return their product Provide a default value for the second parameter


var n4 = 5;
var n5 = 10;

function product(n4, n5 = 1){
    return n4*n5;
}

console.log(product(n4, n5));


//function that takes a person name and age and return a greeting message. Provide a default value for the age

var name = "Shrinivas";
var age = 23;

function greet(name, age){
    return "heloo "+name+" you are "+age+" years old";
}

console.log(greet(name, age));
