
        //feature 3 and 4 are alredy covered in the loops

        // Leap year check script: script thar checks if a leap year using multiple conditions and logs the result

        let year = prompt("Enter a year: ");
        year = parseInt(year);

        if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
            console.log("The year is a leap year");
        } else{
            console.log("The year is not a leap year");
        }
   