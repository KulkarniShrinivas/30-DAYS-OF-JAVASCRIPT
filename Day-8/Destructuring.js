

//use array destructuring to extract the first and second elements from an array of numbers and log them to the console


console.log("Array Destructuring Example:");
var numbers = [1,2,3,4,5];
var [first, second] = numbers;
console.log(first, second);



//Use Object destructuring to extract the title and author from a book object and log them to the console

console.log("Object Destructuring Example Of Book:");

var book = {
    title: "The Alchemist",
    author: "Paulo Cossio",
}

console.log("Title: "+ book.title);
console.log("Author: "+ book.author);

//or

var {title, author} = book;
console.log("Title: "+ title);