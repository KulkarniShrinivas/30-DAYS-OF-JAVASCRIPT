<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        // Define the custom error class
        class CustomError extends Error {
            constructor(message) {
                super(message);
                this.name = 'CustomError';
            }
        }

        // Function that throws an instance of the custom error
        function throwError() {
            throw new CustomError('This is a custom error message');
        }

        // Handle the custom error using a try-catch block
        try {
            throwError();
        } catch (error) {
            if (error instanceof CustomError) {
                console.log(`Caught a custom error: ${error.message}`);
            } else {
                console.log(`Caught an unexpected error: ${error.message}`);
            }
        }


        //write a function that validates user input(e.g checking if a string is not empty) and
        //throws a custom error if the validation fails. Handle the custo error using try-catch block


        class ValidateError extends Error {
            constructor(message) {
                super(message);
                this.name = 'ValidateError';
            }
        }

        // Function that validates user input
        function validateInput(input) {
            if (input === '') {
                throw new ValidateError('Input cannot be empty');
            }
            console.log('Input is valid');
        }

        try {
            validateInput(''); 
        } catch (error) {
            if (error instanceof ValidateError) {
                console.log(`Caught a custom error: ${error.message}`);
            } else {
                console.log(`Caught an unexpected error: ${error.message}`);
            }
        } finally {
            console.log('Validation complete');
        }
    </script>
</body>
</html>