let arr=[1,2,3,4,5];

arr.name="amrit"
arr.roll=20;


// arr[100]=101
// console.log(arr[55]);
// console.log(arr);


// for-each loop for array
// arr.forEach(element => {
//     console.log(element);
// });


// using for-in loop for arrays
for (const key in arr) {
    console.log(key,'',arr[key]);
}