
# Basic JavaScript Arithmetic and Comparison Operations

This repository contains multiple HTML files with embedded JavaScript code that perform basic arithmetic, comparison, and logical operations. These scripts demonstrate the use of various operators and control structures in JavaScript.

## Table of Contents

- [Getting Started](#getting-started)
- [Scripts Overview](#scripts-overview)
- [Usage](#usage)
- [Contributing](#contributing)


## Getting Started

To use the scripts, clone this repository and open the HTML files in a web browser. Each HTML file contains a separate script demonstrating specific operations.

### Prerequisites

- A web browser (e.g., Chrome, Firefox, Edge)
- Basic knowledge of HTML and JavaScript

## Scripts Overview

### 1. Basic Arithmetic Operations

This script performs addition, subtraction, multiplication, division, and modulus operations on predefined variables.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Arithmetic Operations</title>
</head>
<body>
    <script>
        let num1 = 5;
        let num2 = 3;
        console.log(num1 + num2);

        var num3 = 10;
        var num4 = 5;
        console.log(num3 - num4);

        let num5 = 5;
        let num6 = 3;
        console.log(num5 * num6);

        var num7 = 10;
        var num8 = 2;
        console.log(num7 / num8);

        let num9 = 10;
        let num10 = 3;
        console.log(num9 % num10);
    </script>
</body>
</html>
```

### 2. Compound Assignment Operators

This script demonstrates the use of compound assignment operators (`+=` and `-=`).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Compound Assignment Operators</title>
</head>
<body>
    <script>
        let num1 = 10;
        num1 += 5;
        console.log(num1);

        let num2 = 10;
        num2 -= 5;
        console.log(num2);
    </script>
</body>
</html>
```

### 3. Comparison Operators

This script demonstrates the use of comparison operators (`>`, `<`, `>=`, `<=`, `==`, `===`).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison Operators</title>
</head>
<body>
    <script>
        let num1 = 10;
        let num2 = 20;
        console.log(num1 > num2);

        let num3 = 10;
        let num4 = 10;
        console.log(num3 >= num4);
        console.log(num3 <= num4);

        var num5 = 10;
        var num6 = "10";
        console.log(num5 == num6);
        console.log(num5 === num6);
    </script>
</body>
</html>
```

### 4. Logical Operators

This script demonstrates the use of logical operators (`&&`, `||`, `!`).

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Logical Operators</title>
</head>
<body>
    <script>
        let num1 = 10;
        let num2 = 20;
        console.log(num1 > 5 && num2 < 30);

        var num3 = 10;
        var num4 = 20;
        console.log(num3 > 5 || num4 < 30);

        let num5 = 10;
        let num6 = 20;
        console.log(!(num5 > 5));
    </script>
</body>
</html>
```

### 5. Ternary Operator

This script uses the ternary operator to check if a number is positive or negative.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ternary Operator</title>
</head>
<body>
    <script>
        let num1 = 10;
        let result = num1 % 2 === 0 ? "Even" : "Odd";
        console.log(result);
    </script>
</body>
</html>
```

### 6. Interactive Arithmetic Operations

This script uses `prompt` to take user input for arithmetic operations and displays the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Interactive Arithmetic Operations</title>
</head>
<body>
    <script>
        let num1 = 10;
        let num2 = 20;
        let choice = parseInt(prompt("Enter your choice: 1. Addition 2. Subtraction 3. Multiplication 4. Division"));

        switch(choice){
            case 1:
                console.log(num1 + num2);
                break;
            case 2:
                console.log(num1 - num2);
                break;
            case 3:
                console.log(num1 * num2);
                break;
            case 4:
                console.log(num1 / num2);
                break;
            default:
                console.log("Invalid choice");
        }
    </script>
</body>
</html>
```

### 7. Comparison and Logical Operations with User Input

This script uses `prompt` to take user input for comparison and logical operations and displays the result.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comparison and Logical Operations</title>
</head>
<body>
    <script>
        window.alert("Comparing num1=10 and num2=20 using different comparison operators and combining conditions using logical operators");
        let num1 = 10;
        let num2 = 20;
        let result = prompt("Enter the comparison operator: 1. > 2. < 3. >= 4. <= 5. == 6. ===");
        result = parseInt(result);

        switch(result){
            case 1: 
                console.log(num1 > num2);
                break;
            case 2:
                console.log(num1 < num2);
                break;
            case 3:
                console.log(num1 >= num2);
                break;
            case 4:
                console.log(num1 <= num2);
                break;
            case 5:
                console.log(num1 == num2);
                break;
            case 6:
                console.log(num1 === num2);
                break;
            default:
                console.log("Invalid choice");
        }

        let result1 = prompt("Enter the logical operator: 1. && 2. || 3. !");
        result1 = parseInt(result1);

        switch(result1){
            case 1:
                console.log(num1 > 5 && num2 < 30);
                break;
            case 2:
                console.log(num1 > 5 || num2 < 30);
                break;
            case 3:
                console.log(!(num1 > 5));
                break;
            default:
                console.log("Invalid choice");
        }
    </script>
</body>
</html>
```

### 8. Ternary Operator with User Input

This script uses the ternary operator to determine if a number entered by the user is positive or negative.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ternary Operator with User Input</title>
</head>
<body>
    <script>
        let result = parseInt(prompt("Enter a number: ")) > 0 ? "Positive" : "Negative";
        console.log(result);
    </script>
</body>
</html>
```

## Usage

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/js-arithmetic-comparison.git
    ```

2. Navigate to the project directory:
    ```sh
    cd js-arithmetic-comparison
    ```

3. Open the desired HTML file in a web browser to view the output.

## Contributing

Contributions are welcome! Please fork this repository, make your changes, and submit a pull request.


