
        //program that uses a switch case to determine the day of the week based on number(1-7) and log the day name to the console

        let day = prompt("Enter a number between 1-7: ");
        day = parseInt(day);

        switch(day){
            case 1:
                console.log("Sunday");
                break;
            case 2:
                console.log("Monday");
                break;
            case 3:
                console.log("Tuesday");
                break;
            case 4:
                console.log("Wednesday");
                break;
            case 5:
                console.log("Thursday");
                break;
            case 6:
                console.log("Friday");
                break;
            case 7:
                console.log("Saturday");
                break;
            default:
                console.log("Invalid choice");
        }

        //program that uses a switch case to assign a grade('A','B','C','D','F') based on a score and log the grade to the console

        let score = prompt("Enter your score: ");
        score = parseInt(score);

        switch(score){
            case 90:
                console.log("Grade A");
                break;
            case 80:
                console.log("Grade B");
                break;
            case 70:
                console.log("Grade C");
                break;
            case 60:
                console.log("Grade D");
                break;
            case 50:
                console.log("Grade F");
                break;
            default:
                console.log("Invalid choice");
                
        }