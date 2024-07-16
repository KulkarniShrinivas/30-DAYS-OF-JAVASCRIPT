
        //program to check if a number is positive or zero and log the result to the console

        let num = prompt("Enter a number: ");
        num = parseInt(num);

        if(num>0){
            console.log("The number is positive");

        } else if(num == 0){
            console.log("The number is zero");
        } else{
            console.log("The number is negative");
        }


        //program to check if person is eligible to vote(18 years and above) and log the result to the console

        let age = prompt("Enter your age: ");
        age = parseInt(age);

        if(age >= 18){
            console.log("You are eligible to vote");
        }
        else{
            console.log("You are not eligible to vote");
        }
    