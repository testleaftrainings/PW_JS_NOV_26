//promise- JS object to handle asynchronous operation
//pending, resolved, rejected
//promise with .then and .catch

// let marks=30
// let studentRecord= new Promise((resolve,reject)=>{

// if(marks>35){
//     resolve("passed")
// }else{
//     reject('failed')
// }

// })

// //console.log(studentRecord);

// studentRecord
// .then(result=>console.log(result))
// .catch(error=>console.log(error))


//promise with async-await


let marks=30

function getResult(){
return new Promise((resolve,reject)=>{

if(marks>35){
    resolve("passed")
}else{
    reject('failed')
}

})

}

async function progress(){

    try{
        const result=await getResult()
        console.log(result);

    }catch(error){
        console.log(error);
    
    }
}

progress()


