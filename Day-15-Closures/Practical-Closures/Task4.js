
//Create a closure that captures a user's name and returns a function that greets the user by name

function greetUser(name){
    return function(){
        console.log('Hello ' + name);
    }
}

const greetJohn = greetUser('John');
greetJohn(); //Logs: Hello John


//In this clouser where we have used?
