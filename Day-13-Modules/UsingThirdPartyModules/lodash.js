
//Install a third party module(e.g lodash) using npm 
//Import and use a function from this module in a script

// lodash.js

import _ from 'lodash';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const chunkedArr = _.chunk(arr, 2);
console.log(chunkedArr);
