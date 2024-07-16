
        //program to print a pattern using nested loops
        // *
        // **
        // ***
        // ****
        // *****

        for(let i = 1; i<=5; i++){
            let pattern = "";
            for(let j = 1; j<=i; j++){
                pattern += "*";
            }
            console.log(pattern);
        }
   