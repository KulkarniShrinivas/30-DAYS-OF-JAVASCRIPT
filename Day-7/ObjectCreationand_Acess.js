

//create an object representing a book with properties like title, author and year and log the object to the console

var book = { title: "The Alchemist", author: "Paulo Coelho", year: 1988 };
console.log(book);

//another method

var book = new Object();
book.title= "The Alchemist";
book.author= "Paulo Coelho";
book.year= 1988;

console.log(book);

//Access and log the title and auther properties of the book object

console.log("The title of the book is: " + book.title);

console.log("The author of the book is: " + book.author);