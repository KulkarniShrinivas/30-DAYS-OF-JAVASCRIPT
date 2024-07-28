

        //Create a promise that randomly resolves or rejects. Use .catch() to handle the rejection
        //and log the error message to the console

        const promise = new Promise((reolve, reject) => {
            const randomNum = Math.floor(Math.random() * 2);
            if(randomNum === 0){
                resolve('Promise is resolved');
            } else {
                reject('Promise is rejected');
            }
        });

        promise.then((message) => {
            console.log(message);
        }).catch((error) => {
            console.log(error);
        });
        
 
        //Use try catch within an async function to handle error from promise that randomly resolves 
        //or rejects, and log the error message.

        const promise2 = new Promise((resolve, reject) => {
            const random = Math.random();
            if (random > 0.5) {
                resolve('Promise resolved successfully');
            } else {
                reject('Promise rejected with an error');
            }
        });

        // Async function to handle the promise
        async function handlePromise() {
            try {
                const message = await promise;
                console.log(message);
            } catch (error) {
                console.log(`Caught an error: ${error}`);
            }
        }

        // Call the async function
        handlePromise();

        