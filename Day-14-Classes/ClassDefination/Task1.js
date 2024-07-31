//Define a class Person with properties name and age and a method to return greeting 
//message. create an instance of the class and log the greeting message ]

class Person{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    greeting(){
        return `Hello ${this.name}!`;

    }

}

const person1 = new Person('John', 25);
console.log(person1.greeting());
