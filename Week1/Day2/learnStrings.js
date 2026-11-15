//string ->  sequence of characters- represent it using '',"",``


//string literal-> assigning value directly,compares both datatype and value

// let companyName="Testleaf" //1000
// let firmName="Testleaf"  //1000//true
//let firmName="testleaf"  //2000 //false

// console.log(companyName===firmName)//true
// console.log(companyName==firmName)//true

//string objects-> compares the reference of the string

// let companyName1=new String("Testleaf")
// let firmName1=new String("Testleaf")

//compares obj refernce
// console.log(companyName1===firmName1)//3000//false
// console.log(companyName1==firmName1)//4000//false

//compare literal and object
// console.log(companyName===companyName1)//false
// console.log(companyName1==companyName)//true- because obj ref is converted to string and compared

//compare the data present inside string object
// console.log(companyName===companyName1.toString())

//index, length
//index strats from 0->P,1->l......t->9
//length starts from 1->p..t->10
//length=index+1

// let course="Playwright"
// console.log(course.length);//10

// //escape sequences(\t,\n,\)
// let data='it\'s \na \nregression test\ting'

// console.log(data);

/* it's 
a 
regression test ing */

//concat(),"+",`${}`-template literal

// let v1=50
// let v2="testcases"

// console.log("there are",v1+v2);
// console.log("there are",v1.toString().concat(v2));
// console.log(`there are ${v1} ${v2}`);


 //charAt()-prints the char at particular index
//  let course="Playwrightghkjhghjg"

//  console.log(course.charAt(4));//w

 //indexof()-prints index of the character

 //console.log(course.indexOf("g"))//7
//  console.log(course.indexOf("g",8));//10
//  console.log(course.lastIndexOf("g"));//18
 
 
 //substring()-> extracts the portion of the string
//  let word="Automation"
//  console.log(word.substring(4));//mation
//  console.log(word.substring(4,7));//mat
//  console.log(word.substring(7,4))//it swaps(4,7)=> same result mat
//  console.log(word.substring(-4));//0->Automation
//  console.log(word.substring(-4,5));//(0,5)=>->Autom

 //slice()->extracts the portion of the string
//  console.log(word.slice(3,6))//oma
//  console.log(word.slice(6,3))//empty(no swapping)
//  //  -11  -6 -5  -4   -3  -2   -1(index)
//  //"Auto  m  a   t     i   o    n"
//  console.log(word.slice(-6,-1))//matio
//  console.log(word.slice(-6))//mation

 //split()->this converts string into array

// let words="playwright automation is interesting"
// console.log(words.split());//[ 'playwright automation is interesting' ]
// console.log(words.split(""));

/* [
  'p', 'l', 'a', 'y', 'w', 'r', 'i',
  'g', 'h', 't', ' ', 'a', 'u', 't',
  'o', 'm', 'a', 't', 'i', 'o', 'n',
  ' ', 'i', 's', ' ', 'i', 'n', 't',
  'e', 'r', 'e', 's', 't', 'i', 'n',
  'g'
] */
console.log(words.split("i"))//[ 'playwr', 'ght automat', 'on ', 's ', 'nterest', 'ng' ]
console.log(words.split(" "));//[ 'playwright', 'automation', 'is', 'interesting' ]
let splitwords=words.split(" ")
console.log(splitwords[0])//playwright






 
