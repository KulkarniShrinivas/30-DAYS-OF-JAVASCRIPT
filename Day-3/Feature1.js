
        //Number check script script taht checks if numbver is positive, negative or zero using if-else statments and logs the results

        let num = prompt("Enter a number: ");
        num = parseInt(num);

        if(num>0){
            console.log("The number is positive");

        } else if(num == 0){
            console.log("The number is zero");
        } else{
            console.log("The number is negative");
        }
 