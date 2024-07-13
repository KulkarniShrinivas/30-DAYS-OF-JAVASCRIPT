# 30-DAYS-OF-JAVASCRIPT

## JavaScript Variable Types and Reassignment Demo

This project contains a simple HTML file with embedded JavaScript. It demonstrates various concepts related to JavaScript variables, including variable declaration, data types, and reassignment behavior of `var`, `let`, and `const`.

## Table of Contents

- [Introduction](#introduction)
- [Tasks Overview](#tasks-overview)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Example Output](#example-output)

## Introduction

This project is designed to help you understand the different ways to declare variables in JavaScript and how they behave when you try to reassign them. It also covers the basic data types in JavaScript and how to log their types to the console.

## Tasks Overview

1. **Variable Declaration and Logging:**
   - Declare variables using `var`, `let`, and `const`.
   - Assign values and log them to the console.

   ```javascript
   //  Declare a variable using var, assign it a number and log the value to the console
   var num = 10;
   console.log(num);

   // Declare a variable using let, assign it a string and log the value to the console
   let str = "Hello";
   console.log(str);

   //Declare a variable using const, assign it a boolean and log the value to the console
   const boolean = true;
   console.log(boolean);
   ```

2. **Data Types:**
   - Create variables of different data types (number, string, boolean, object, array).
   - Log the type of each variable using the `typeof` operator.

   ```javascript
   //  Create variables of different data types and log their types
   let num1 = 10;
   let str1 = "Hello";
   let boolean1 = true;
   let obj = {name: "John", age: 25};
   let arr = [1, 2, 3, 4, 5];

   console.log(typeof num1); // number
   console.log(typeof str1); // string
   console.log(typeof boolean1); // boolean
   console.log(typeof obj); // object
   console.log(typeof arr); // object
   ```

3. **Reassignment Demonstration:**
   - Demonstrate the error that occurs when trying to reassign a `const` variable.

   ```javascript
   //  Reassigning the value of a variable declared with let
   let num2 = 10;
   console.log(num2); // 10
   num2 = 20;
   console.log(num2); // 20

   //  Trying to reassign a variable declared with const
   const num3 = 10;
   console.log(num3); // 10
   num3 = 20; // TypeError: Assignment to constant variable.
   ```

4. **Variable Types Console Log:**
   - Declare variables of different data types and log both the value and types of each variable to the console.

   ```javascript
   let num = 10;
   console.log(num);
   console.log(typeof num);

   let str = "Hello";
   console.log(str);
   console.log(typeof str);

   let boolean = true;
   console.log(boolean);
   console.log(typeof boolean);

   let obj = {name: "John", age: 25};
   console.log(obj);
   console.log(typeof obj);

   let arr = [1, 2, 3, 4, 5];
   console.log(arr);
   console.log(typeof arr);
   ```

5. **Reassignment Demo:**
   - Create a script that demonstrates the difference in behavior between `let` and `const` when it comes to reassignment.

   ```javascript
   let num1 = 10;
   console.log(num1);

   num1 = 20;
   console.log(num1);

   const num2 = 10;
   console.log(num2);

   num2 = 20; // TypeError: Assignment to constant variable.
   ```

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/30-DAYS-OF-JAVASCRIPT.git
   ```

2. Navigate to the project directory:
   ```bash
   cd 30-DAYS-OF-JAVASCRIPT
   ```

3. Open the `index.html` file in your preferred web browser to see the output.

## Usage

- Open the `index.html` file in a web browser to view the example output.
- Modify the JavaScript code in `index.html` to experiment with different variable declarations and data types.
- Observe the console output to understand how JavaScript handles variable declaration, reassignment, and data types.




