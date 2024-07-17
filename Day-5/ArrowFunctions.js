

//write an arrow function to find the maximum of two numbers and log the result to the console

let n1= 5;
let n2 = 10;

var  max = (n1,n2) => {
    if(n1>n2){
        console.log("The maximum number is "+n1);

    }
    else{
        console.log("The maximum number is "+n2);
    }
}


//write an arrow function to check if a string contains a specific charater and return a boolean value

let str = "Shrinivas";
let char = "a";

let check = (str, char) => {
    return str.includes(char);

}

console.log(check(str, char));