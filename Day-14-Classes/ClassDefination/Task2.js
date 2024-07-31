//Add a method to the person class thaty updates the age properly and logs the updated age 


class Person{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }
    greeting(){
        return `Hello ${this.name}!`;

    }
    updateAge(){
        this.age += 1;
        return `Updated age is ${this.age}`;
    }
}

const person2 = new Person('John', 25);
console.log(person2.greeting());
