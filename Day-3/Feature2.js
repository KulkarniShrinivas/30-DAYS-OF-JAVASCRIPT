
        //Voting eligiblity script: Create a script to check if a person is eligible to vte based on their age and log the result to the console

        let age = prompt("Enter your age: ");
        age = parseInt(age);

        if(age >= 18){
            console.log("You are eligible to vote");
        }
        else{
            console.log("You are not eligible to vote");
        }
  