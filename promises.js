
const fs=require('fs');

//file reading using promises
//also asynchronous

console.log('Before');

let promise=fs.promises.readFile('amr.txt')
console.log(promise);

promise.then((data) => {
    console.log("My Result : "+data);
}).catch((err) => {
    console.log(err);
});

console.log('After');