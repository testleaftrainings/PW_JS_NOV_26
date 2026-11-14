/*  variable declaration+value Assignment= Initilalization
ex: var course + course="playwright"= let course="Playwright"  */

//var allows both redeclaration and reassignment
var course="playwright" //declaration

var course="Selenium"  //redeclare the same variable name

course="python" //reassignment
course=1234 //reassignment
console.log(course) //1234
console.log(typeof course) //number

//let-> allows reassignment but redeclaration is not possible

let presentCity="Chennai"
//let presentCity="Chennai"

presentCity="Bangalore"
console.log(presentCity)//Bangalore
console.log(typeof presentCity)//string



//const -> final and fixed(cannot be redeclared and reassigned)

const pan = "AYJPG6345"
//const pan = "AYJPG6345"

pan="AY23HU976"
console.log(pan)//TypeError: Assignment to constant variable.

