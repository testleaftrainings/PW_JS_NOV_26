//scoping -> visibility or accessibility of variable in the code

/* 1. block scoped  - let and const (accessible only inside the block ex: if {})
   2. function scoped -var (accessible inside both the block and function ex: function{ } and if{})
   3. global scoped -let, var and cost(accessible anywhere outside the block {})
 */


   /* if_else-conditional statement
   age>18 -eligible to vote
   else- not eligible to vote
    */


  /*  function voting(age){ //age-Parameter

   //let age=16
   if(age>=18){
    console.log("eligible to vote") //eligible to vote
    }else{
    console.log("not eligible to vote") //not eligible to vote
    }

    }

    voting(12)//argument
    voting(10)
    voting(20) */

 
//global scoped variable empID

let empID=123

function empDetails(){

    let genderType="female"
    if(genderType="female"){
    
    //block scoped variable
    var name1="vidya"
    let age=35
    const eductaion="BE"
    console.log(`name inside the if block ${name1}`)//name inside the if block vidya
    console.log("age inside the if block",age)//age inside the if block 35
    console.log("education inside the if block",eductaion)// education inside the if block BE
    console.log("empID inside the if block",empID)// empID inside the if block 123

    }
    console.log("name outside the if block",name1)//name outside the if block vidya
    //console.log("age outside the if block",age)//ReferenceError: age is not defined
    //console.log("education outside the if block",eductaion)//ReferenceError: education is not defined

    console.log(`name inside the function block ${name1}`)//name inside the function block vidya
     console.log("empID outside the if block",empID)//empID outside the if block 123
}
//console.log(`name outside the function block ${name1}`)//ReferenceError: name1 is not defined

empDetails()
 console.log("empID outside the function block",empID)//empID outside the function block 123
