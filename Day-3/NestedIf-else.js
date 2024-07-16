
        //program to find the largest of three numbers using nested if else statments

        let num1= 20;
        let num2= 30;
        let num3= 10;

        if(num1 > num2){
            if(num1 > num3){
                console.log("The largest number is num1: " + num1);
            
            }else {
                console.log("The largest number is num3: " + num3);
            }
        }else{
            if(num2 > num3){
                console.log("The largest number is num2: " + num2);
            }else{
                console.log("The largest number is num3: " + num3);
            }
            
        }
  