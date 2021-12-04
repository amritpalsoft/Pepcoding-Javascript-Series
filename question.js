// lexical scope : when we call a function, if variable is not inside the function
// then it will search for variable outside the function but it will search outside 
// where the function is written not where it is called
// Scope chain: when the variable is not inside the function then it will search outside the 
// function and if it is not there also then it will look further outside and this searching
// will form a scope chain
 
console.log('line no 1',varName);
var varName=10;

function b(){
    console.log('line no 5',varName);
}
console.log('line no 7',varName);
function fun(){
    console.log('line no 9',varName);
    var varName=20;
    console.log('line no 11',varName);
    b();
}
fun();
console.log('line no 15',varName);