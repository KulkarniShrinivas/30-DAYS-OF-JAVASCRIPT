
//use the map method to create a new array where eacg number is douled and log the new array

var m1=[1,2,3,4,5];
var douled = m1.map(function(num){
    return num*2;

})
console.log(douled);

//map def: map() method creates a new array with the results of calling a provided function on every element in the calling array.


//use the filter 

var m2=[1,2,3,4,5];
var filtered=m2.filter(function(num){
    return num%2==0;
})

console.log(filtered);

//filter def: filter() method creates a new array with all elements that pass the test implemented by the provided function.


//use the reduce method to calculate the sum of all numbers in the array and log the result

var m3=[3,2,4,5,6];
var sum=m3.reduce(function(total,num){
    return  total+num;
})
console.log("The sum of all numbers in the array is: "+sum);