

//add a method to the book object that returns a string with the book's title and author, and log the result of calling this method

var book ={ "title": "The Alchemist", "author": "Paulo coelho", "year": 1988, "getSummary": function (){
    return this.title + " was written by " + this.author;

}}

console.log(book.getSummary());


//Add a method to the book object that takes a parameter and update the books year properly then log the updated object

var book = {
    "title": "The Alchemist",
    "author": "Paulo Coelho",
    "year": 1988,
    "getSummary": function() {
        return this.title + " was written by " + this.author;
    },
    "updateYear": function(newYear) {
        this.year = newYear;
    }
};

console.log(book);
book.updateYear(1992);
console.log(book);