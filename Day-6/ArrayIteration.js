

//Use a for loop to iterate over the array and log each element to the console

var a1 = [1, 2, 3, 4, 5];
for (var i=0; i<a1.length; i++){
    console.log("Below is the for loop element: ");
    console.log(a1[i]);
}

//Use the forEach method to iterate over the arrray log each element to the console


var a2 = [1, 2, 3, 4, 5];
a2.forEach(function(element){
    console.log("The forEach element is: "+element);
})