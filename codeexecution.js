//we have defined three functions of same name 
//but js will execute only last function of name real()
//bcz in js memory exection to function occurs before code runs 
//so wheather we call real() at last or at top only last function will run

// real();

// console.log(global);
// console.log(this);

function real() {
    console.log('i am real');
}

function real() {
    console.log('i am original');
}

function real() {
    console.log('i am final');
}
