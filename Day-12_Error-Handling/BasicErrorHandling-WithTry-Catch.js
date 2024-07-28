
        //write a function that intentionally throws an error and use a try-catch blcok to handle the error and log 
        //and log the error message to the console

       function ErrorFunction() {
            try {
                throw new Error('This is an error');
            } catch (error) {
                console.log(error.message);
            }
        }

        ErrorFunction();


        //Create a function that divides two numbers and throws an error if the denominator is zero.
        //Use a try-catch block to handle this erro


        function Numbers(num1,num2) {
            try{
                if(num2 == 0){
                    throw new Error('Denominator cannot be zero');
            }
            console.log(num1/num2);
        } catch (error) {
            console.log(error.message);

        }
        }

        Numbers(10,0);
 