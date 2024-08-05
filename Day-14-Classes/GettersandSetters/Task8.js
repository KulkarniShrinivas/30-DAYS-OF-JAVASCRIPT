//Add a setter method to the Person class to update the na,e properties firstname and lastname Updte the name using the setter and log the updated full name


class Person{
    constructor(firstName, lastName){
        this.firstName= firstName;
        this.lastName= lastName;
    }

    set fullName(fullName){
        const name = fullName.split(' ');
        this.firstName = name[0];
        this.lastName = name[1];

    }

    get fullName(){

        return `${this.firstName} ${this.lastName}`;
    }

}

const person = new Person('John', 'Doe');
person.fullName = 'Jane Doe';

console.log(person.firstName);