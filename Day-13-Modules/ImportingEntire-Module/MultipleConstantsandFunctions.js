
//Create a module that exports multiple constants and functions. Import the entire module as an 
//object in another script and use its properties 

export const PI = 3.14159;
export const E = 2.71828;


export const add = (a, b) => {
    return a + b;
};

export const subtract = (a, b) => {
    return a - b;
};

export const multiply = (a, b) => {
    return a * b;
};

export const divide = (a, b) => {
    return a / b;
};
