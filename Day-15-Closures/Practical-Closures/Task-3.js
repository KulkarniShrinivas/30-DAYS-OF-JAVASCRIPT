
//write a function that generates unique IDs. Use a closure to keep track of the last generated ID and increment it with each call


function generateID(){
    let id=0;

    return function(){
        id++;
        return id;
    }
}

const idGenerator=generateID();
console.log(idGenerator());

console.log(idGenerator());
