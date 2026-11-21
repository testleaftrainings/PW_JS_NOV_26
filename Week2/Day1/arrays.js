//array - collection of elements

// let eName="Arun"
// let eId=123
// let eSal=20000

//array declaration
// let arr=["Arun",123,20000]

//index=0,length=1

//access the array    0      1     2-index
// console.log(arr) //[ 'Arun', 123, 20000 ]

//access name
// console.log(arr[0])//Arun

//modify the array
// arr[0]="kavin"
// console.log(arr)//[ 'kavin', 123, 20000 ]

//index is not defined
// console.log(arr[3])//undefined

//length 
// console.log(arr.length);//length=index+1=3

//pop()- used to remove 1 element at the end of the array, this will modify the original array
// console.log(arr.pop())//20000
// console.log(arr)//[ 'kavin', 123 ] =2

//push()- used to add 1 or more elements at the end of the array
// console.log(arr.push(undefined,true)) //4
// console.log(arr)//[ 'kavin', 123, undefined, true ]

//shift()- used to remove element at the start of the array.
// console.log(arr.shift());//kavin
// console.log(arr)//[ 123, undefined, true ]

//unshift()- used to add 1 or more elements at the start of the array.
// console.log(arr.unshift(15,"hello"));//5-new length of the array
// console.log(arr)//[ 15, 'hello', 123, undefined, true ]
                 //  0    1        2     3         4
//splice()-used to delete and add elements to the array
//start index=1st argument
//delete count=2nd argument
// console.log(arr.splice(1,2,"gauthami",2026,67))//[ 'hello', 123 ]
// console.log(arr)//[ 15, 'gauthami', 2026, 67, undefined, true ]
// console.log(arr.splice(2,-1,"if"))//[]
// console.log(arr);//[ 15, 'gauthami', 'if', 2026, 67, undefined, true ]
// console.log(arr.splice(1,7))//deletes entire array-[ 'gauthami', 'if', 2026, 67, undefined, true ]
// console.log(arr);//[ 15 ]

//slice()- used the extract the portion of the array
//start index: 1st argument(optional)
//end index: 2nd argument(optional)

// let numarray=[12,34,23,78,14]
// console.log(numarray)//[ 12, 34, 23, 78, 14 ]

//extract portion
// console.log(numarray.slice(1,5))//[ 34, 23, 78,14 ]
// //console.log(numarray.slice())//[ 12, 34, 23, 78, 14 ]
// console.log(numarray);//[ 12, 34, 23, 78, 14 ]
//                       // -5  -4   -3   -2  -1    
//                       //  0   1    2    3   4
// console.log(numarray.slice(-4,-1))//[ 34, 23, 78 ]
// console.log(numarray.slice(-1,-4))//[ ]=> if start index is greater than end index, it returns null
// console.log(numarray.slice(0,-4))//[12]
// console.log(numarray.slice(1))//[ 34, 23, 78, 14 ]
// console.log(numarray.slice(1,1))//[]
// console.log(numarray.slice(0,-3))//[ 12, 34 ]

//string sorting using ascii values
//let numarr11=[500,1000,11,20,78,40,"selenium", "playwright", "A"]
// console.log(numarr11.sort())//[ 1000, 20, 40, 500, 78 ]

//arrow functions
// let a=[3,6,5,9]
// console.log(a.sort((x,y)=>x-y));//a=3,b=6, a-b=3-6=-3,negative, retain as it is
//                         //6-5=1(positive)-swap the values[3,5,6,9]
//                         //6-9=-3(negative)[3,5,6,9]
//  //[ 3, 5, 6, 9 ]

//reverse() - reverse the array 
// console.log(a.reverse());//[ 9, 6, 5, 3 ]

//map()-transform all the array elements to new array
console.log(a.map(num=>num+2)); //9+2,6+2,5+2,3+2, [11,8,7,5]

//filter()-select the unique value

let c=[100,50,40]
console.log(c.filter(num=>num>40));//[ 100, 50 ]

//join()- converts array into strings.
console.log(c.join("-"))//100-50-40


























