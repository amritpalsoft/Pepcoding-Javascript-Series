//function statement, when we write in this way it is called
// as function statement 
function hello(params) {
    console.log("hello world",params);
}

// hello();
// hello('amrit');
// hello([1,2,3]);
// hello({name:'amrit',roll:20})

function hello2(a,b) {
    let sum=a+b;
    return sum;
}

// let result=hello2(2,4);
// console.log(result);


// *********************************************************
//this is function expression
// when we assign function to a variable then  it is function expression
//it is also called as anonymous function bcz we are not
// defining name of function
let myFun=function () {
    console.log('function defined in variable');
}

// myFun();

// ***********************************************************
function func() {
    let a=5;
    function func2(){
        let b=2;
        let sum=a+b;
        // console.log(sum);
        return sum;
    }
    return func2();
    
}

// let result=func();
// console.log(result);


// ***************************************************************
function outer(params){
    console.log('i am outer function',params);
    params();
}

function inner(){
    console.log('i am inner function');
}


//a function is passed as a params 
// outer(inner);

// ****************************************************************
//a function returning a function
function outer(){
    console.log('i am outer function');
    return function inner(){
        console.log('i am inner');
    }
}

// let returnValue=outer();
// console.log(returnValue);
// returnValue();

// *****************************************************************
