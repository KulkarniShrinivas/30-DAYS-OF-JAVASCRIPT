//Add a getter to the Person class to return the full bame(assume a firstName and lastName property) Create an instance and log the full bame using the getter


class Person{
    constructor(firstName, lastName){
        this.firstName= firstName;
        this.lastName= lastName;
    }

    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const person1 = new Person('John', 'Doe');
console.log(person1.fullName);
