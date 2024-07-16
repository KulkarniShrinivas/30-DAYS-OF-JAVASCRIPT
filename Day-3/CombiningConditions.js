
    //program to check if a year is a leap year using multiple conditions and log the result to the console
    
    let year = prompt("Enter a year:");
    year = parseInt(year);

    if(year %4 ==0){
        if(year % 100 == 0){
            if(year % 400 == 0){
                console.log("The year is a leap year");

            } else {
                console.log("The year is not a leap year");
            }
        } else {
            console.log("The year is a leap year");
        
        }
    }
