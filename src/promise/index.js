const promise = new Promise(function(resolve, reject){
    //code to execution
    resolve('Hey! todo correcto.');
})

const cows = 8;
const countCows = new Promise(function (resolve, reject){
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm`);
    }
    else{
        reject("There is not enough cows in the farm");
    }
});

countCows.then((result) => { //resolve
    console.log(result);
}).catch((error) => { //reject
    console.log(error);
}).finally(() => {console.log("Finally")}); //final doesn´t matter if resolve or reject