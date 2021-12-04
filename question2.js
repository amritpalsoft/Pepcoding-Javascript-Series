var a=20;
console.log('line no 2',a);
function fun(){
    console.log('line no 4',a);
    var a=20;
    a++;
    console.log('line no 7',a);
    if (a) {
        var a=30;
        a++
        console.log('line no 11',a);
    }
    console.log('line no 13',a);
}
fun();
console.log('line no 16',a);

// in this code initially in Global Execution Context 3 things are created
// Global object , this , and variable a with value undefined and adress of function fun()
// and when fun() is called then its execution context will be created and variable a is alocated
// undefined 
// both variable a in global execution and execution context of fun() are different 
// and as the fun() is removed from the stack variable inside fun() will not be available