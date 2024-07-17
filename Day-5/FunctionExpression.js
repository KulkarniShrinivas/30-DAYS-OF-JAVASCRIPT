// Function expression to find the maximum of two numbers and log the result to the console
let num3 = 5;
let num2 = 10;

let max = function(num1, num2) {
    if (num1 > num2) {
        console.log("The maximum number is " + num1);
    } else {
        console.log("The maximum number is " + num2);
    }
};


max(num1, num2);

// Function expression to concatenate two Strings and return the result
let str1 = "Shrinivas ";
let str2 = "Kulkarni";

let concat = function(str1, str2) {
    return str1 + str2;
};

// Call the concat function and log the result
console.log(concat(str1, str2));