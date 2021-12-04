// execution context 
// in js there is no main function so in js exection context is made
// so every program starts with execution context 
// every execution context consist of global object and this and code
// in node global is global object and this is empty object
// but in browser global is window object and this is also window object

// piece is code which is not inside any function is stored in Global Exection 
// Context and for each function execution context is created  
// for variables memory is allocated before code runs and undefined is assigned
// this is called as Hoisting

/*
// in this a is initialised before code runs and thats why we can access
// a before it is declared
console.log(a);
var a;
a=5;
console.log(a);
*/

/*
// but in let and const we cannot access variable before it is declared
// this is called temporal dead zone
console.log(a);
let a;
a=5;
console.log(a);
*/

/*
console.log(a);
const a=5;
console.log(a);
*/

/*
// in var we can reassign a variable i.e. var can be used again
var a=5;
var a=6;
console.log(a);
*/

/*
// in let we can reassign a variable but we cant redeclare it
let a=5;
a=6;
console.log(a);
*/

/*
let a=5;
console.log(a);
{
    let a=6;
    console.log(a);
    a++;
    console.log(a);
}
console.log(a);
*/

/*
var a=5;
console.log(a);
{
    var a=6;
    console.log(a);
    a++;
    console.log(a);
}
console.log(a);
*/

/*
// we cant use let outside the block and var inside the block
let a=5;
console.log(a);
{
    var a=4;
    console.log(a);
}
console.log(a);
*/

/*
var a=5;
console.log(a);
{
    let a=10;
    console.log(a);
}
console.log(a);
*/

/*
var a=4;
console.log(a);
function func(){
    var a=5;
    console.log(a);
    function inner() {
        var a=6;
        console.log(a++);
    }
    inner();
    console.log(a);
}
func();
console.log(a);
*/

/*
//in this we didnt defined var a inside function
var a=4;
console.log(a);
function func(){
    console.log(a);
    a++;
}
func();
console.log(a);
*/

/*
var a=4;
console.log(a);
function func(){
    var a=5;
    console.log(a);
    a++;
}
func();
console.log(a);
*/

/*
let a=4;
console.log(a);
function func(){
    // let a=5;
    console.log(a);
    a++;
}
func();
console.log(a);
*/



/*
// here function can be called before and after function declaration
// but function contained in variable cant be called before function declaration
console.log(a);
var a;
console.log(a);
var a=5;
console.log(a);
fun();
function fun(){
    console.log('hello from fun')
}
fun();
console.log(fun2); 
fun2();
var fun2=function(){
    console.log('hello from fun2');
}
fun2();
*/

