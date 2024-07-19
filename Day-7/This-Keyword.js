

//add a metjod to the book object that uses the this keyword to return a string with the books title and year and log the result of callung this method


var book = {
    "title": "The Alchemist",
    "auther": "Paulo Cochelo",
    "year": 1988,
    getSummary: function(){
        return this.title + "was written in "+ this.year;
    }


}

console.log(book.getSummary());