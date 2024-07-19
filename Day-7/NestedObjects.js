

//create a nested object representing a liberary with properties like name and books(an array of book objects)
//and log the liberary to the console

var liberary = {
    name:"Central Liberary",
    books:[
        {title: "The Alchemist", author: "The Paulo Coelho", year: 1988},
        {title: "The Secret", author: "manish", year: 2006},
        {title: "The Power of Now", author: "jay", year: 1997}
    ]

};
console.log(liberary);

//Access and log the name of the libarary and the titles of all the books i the liberary 

console.log("The name of the liberary is:"+ liberary.name); 
console.log("The books in the liberary are: "+ liberary.books[0].title + ", " + liberary.books[1].title + ", " + liberary.books[2].title);