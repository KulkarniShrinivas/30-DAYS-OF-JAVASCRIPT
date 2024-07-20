
//Use enhancesd object literals to create an object with methods and properties,
//and log the object to the console.

console.log("Enhanced Object Literals Example:");

var name = "Shrinivas";
var age = 25;

var person = {
    name,
    age,
    greet(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} years old`);
    }
    
}

person.greet();

//Create an object with computed property names based on variables and log the object to the console

var key = "z";
var value = 100;

var obj = {
    [key]: value
};

console.log(obj);