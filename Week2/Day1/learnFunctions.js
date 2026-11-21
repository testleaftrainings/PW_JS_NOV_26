/* functions -> reusable block of code

1. named function/function declaration
2. function expression/anonymous function
3. arrow function
4. callback function */


//named function

/* function name(params) {
    
} */

// greet("Vijay")
// function greet(name){ //parameters

//     //console.log("this is a named function");
//     console.log(`hello ${name}`);
    
// }
//greet("Vijay")//arguments
// greet("Kavitha")//arguments

// function add(a,b){
// // let a=4
// // let b=5
// //console.log(a+b)
// return a+b

// }
// console.log(add(12,16))
// console.log(add(15,14))


//function expression/ anonymous function

//addition()-ReferenceError: Cannot access 'addition' before initialization
// let addition=function (){
// let c=4
// let d=5
// console.log(c+d)
// //return a+b

// }
// addition()

//3. arrow function -shorter syntax
// let sum=(i,j)=>
//     {

//     //console.log(i+j)
//     return i+j
// }
    
// console.log(sum(2,5));


//4. callback function - when one function is passed as an argument to other function we 
// call it as callback.

function login(cb1,cb2){//parameter
console.log("login functionality");
cb1()
cb2()
}

function enterUsername(){
console.log("enter username");

}

function enterPassword(){
console.log("enter password");


}

login(enterUsername,enterPassword)//arguments
 

