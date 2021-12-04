
//asynchronous callback
function greet(name){
    console.log(`Hii ${name}`);
}

function myAge(age){
    console.log(`Your age is ${age}`);
}

setTimeout(greet,3000,'amrit');

setTimeout(myAge,1000,27)

function byeMsg(name) {
    console.log(`Good bye ${name}`);
}

byeMsg('amrit');
