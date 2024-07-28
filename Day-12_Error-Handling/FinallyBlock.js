<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>

        //write a script that includes a try-catch block and finally block 
        //log messages in the try catch and finally blocks to observe the execution flow

        function ErrorFunction(){
            try{
                throw new Error('This is an errir');

            }
            catch(error){
                console.log(error.message);
            }
            finally{
                console.log('This is the finally block');
            }

        }

        ErrorFunction();
    </script>
</body>
</html>