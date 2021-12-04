const fs=require('fs');



//synchronous file reading

/*console.log('Before');
let result=fs.readFileSync('amr.txt')
console.log(`Result ${result}`);
console.log('After');*/




//asynchronous file reading using callbacks

/*  console.log('Before');


fs.readFile('amr1.txt',(err,data)=>{
    if (err) {
        console.log('Some errror occured');
    }else{
    console.log(`Result ${data}`);
    }
})


console.log('After');  */