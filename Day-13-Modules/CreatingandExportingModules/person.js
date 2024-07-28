// person.js

//Create a module that exports an object representing a person wth properties and methods.
        //import and use this module in onther script

        
export const person = {
    name: 'John',
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old`);
    }
};
