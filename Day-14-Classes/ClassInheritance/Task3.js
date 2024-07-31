//Define a class Student that extends the person class add a property studentID and a method to return the student ID. create an instance of the student class and log the studnet ID


class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greeting() {
        return `Hello ${this.name}`;
    }
}

class Student extends Person {
    constructor(name, age, studentID) {
        super(name, age);
        this.studentID = studentID;
    }

    getStudentId() {
        return `Student ID is ${this.studentID}`;
    }
}

const student1 = new Student('John', 25, '12345');
console.log(student1.getStudentId());



