

//Install a third party module(e.g axios) using npm. import this module to 
//make a network request in a script

import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.log('An error occurred:', error);
    });

