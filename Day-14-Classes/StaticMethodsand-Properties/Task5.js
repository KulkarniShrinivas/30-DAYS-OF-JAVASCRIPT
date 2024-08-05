//Add a static method to the Person class that returns a generic greeting message. Call this static method without creating an instance of the class and log the message

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    static genericGreeting() {
        return 'Hello there!';
    }
}

console.log(Person.genericGreeting());


//Add a static property to the Student class to keep track of the number of students created.
//Increment this property in the constructor and log the total number of students

class Student{
    static totalStudents=0;
    constructor(name, age, StudentID){

        this.name= name;
        this.age= age;
        this.StudentID= StudentID;
        Student.totalStudents++;

    }
}

const student1 = new Student('John', 25, '12345');
const student2 = new Student('Jane', 23, '12346');
console.log
(Student.totalStudents);