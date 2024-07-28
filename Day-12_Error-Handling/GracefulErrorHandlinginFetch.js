//Use the fetch api to request data from an valid URL
//and handle the error using catch() log an appropriate error message to the console.

fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log('An error occurred:', error));



    //Use the fetch API to request data from an invalid URL withhin an async function and 
    //handle the error using try catch log the error message

    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log(data);

        }
        catch (error) {
            console.log('An error occurred:', error);
        }
    }


    fetchData();

    