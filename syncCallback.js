//callbacks can be synchronous or asynchronous


//synchronous callback
function greet(name,age,callback1,callback2){
    console.log(`Hello ${name}`);
    callback1(name)
    callback2(age)
}

function myName(name){
    console.log(`Hii ${name}`);
}

function myAge(age){
    console.log(`Your Age is ${age}`);
}

greet('amrit',27,myName,myAge);

function byeText(name) {
    console.log(`Bye ${name}`);
}

byeText('amrit');