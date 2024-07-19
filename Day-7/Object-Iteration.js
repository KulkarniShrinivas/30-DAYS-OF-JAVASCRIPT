
//Uses a for...in loop to iterate over the properties of the book object and log each property and its value

console.log("Iterating over the properties of the book object:");

var book = {
    title: "The Alchemist",
    author: "Paulo Cosco",
    year: 1988

};

for(var key in book){
    console.log(key +" : "+ book[key]);
}


//Use object.keys and object.values methods to log the keys and values of the book object 

console.log("The keys of the book object are: "+ Object.keys(book));
console.log("The values of the book object are: "+ Object.values(book));

