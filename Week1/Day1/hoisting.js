
/* hoisting-> default behavior of JS, where only the declaration part is getting hoisted to the top
of the scope but not the value assignment. 

it has 2 pahses
1. memory creation phase
2. execution phase

At memory creation phase = All variable created using var keyword will be assigned with value as undefined
In the execution phase actual value will be assigned to the variable 

ex: var a=12  //a=undefined in memory creation phase
              //a=12 in execution phase

*/

//Actual way to print the data stored in the variable, works as expected
// var a=10
// console.log(a);//10


//var- hoisting takes place and return undefined
// console.log(a)
// var a=10  //undefined

/* internally
var a
console.log(a)
a=10
*/


/* let-hoisting takes place, where only the variable declaration is moved to the top but not the value assignment
and hence throws "ReferenceError: Cannot access 'b' before initialization" */

//expected 
// let b=20
// console.log(b)//20


// console.log(b)//ReferenceError: Cannot access 'b' before initialization
//let b=20

/* below declaration is allowed with let 
let b
b=20 */


/* 
let b
console.log(b)//reference error
b=20 
console.log(b)//20, because after value is assigned .
*/


/* const-hoisting takes place, where only the variable declaration is moved to the top but not the value assignment
and hence throws "ReferenceError: Cannot access 'c' before initialization" */

console.log(c)//ReferenceError: Cannot access 'c' before initialization
//const c=30


/* Note: const variable declaration and value assignment should happen in the same line else it will throw the
error as 'const' declarations must be initialized.

/* below declaration is allowed
const c=30 */


/* below declaration is not allowed,throws error 'const' declarations must be initialized
const c
 c=30 */

//TDZ(Temporal Dead Zone)- the time period between variable declaration and value assignment to it.




