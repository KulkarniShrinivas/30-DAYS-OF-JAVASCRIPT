
//Write a loop that creates an array of functions. Each function should log its
//index when called Use a closure to ensure each function logs the correct Index

function createFunctions(){
    const functions = [];
    for(let i=0; i<5; i++){
        functions.push(function(){
            console.log(i);
        })

    }
    return functions;
}

const functions = createFunctions();
functions[0](); //Logs: 5
functions[1](); //Logs: 5
functions[2](); //Logs: 5
functions[3](); //Logs: 5
functions[4](); //Logs: 5

