const promiseOne= new Promise (function(resolve,reject){
    setTimeout(function(){
        console.log("Async task completed successfully");
        resolve()
    },1000)
})
promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task2");
        resolve()
    },1000)
}).then(function(){
    console.log("async2 resolved");
    
})

const promiseThree=new Promise(function(resolve,reject){
setTimeout(function(){
resolve({username:"Arafat",email:"arafatmr42@gmail.com"})
},1000)
})

promiseThree.then(function(user){
console.log(user)

})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
    // let error=false
    let error=true
    if(!error){
        resolve({username:"Yeasin",job:"Developer"})
    }
    else{
        reject("ERROR: Something went wrong")
    }
    },1000)
})
promiseFour.then(function(user){
console.log(user);
return user.username

}).then(function(username){
console.log(username);

}).catch(function(error){
console.log(error);

}).finally(function(){

 console.log(("The promise is either resolved or rejected"));
 
    
})



const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        // let error=false
        let error=true
        if(!error){
            resolve({username:"Shifat",job:"Developer"})
        }
        else{
            reject("ERROR: JS Code went wrong")
        }
        },1000)
})
 
async function consumePromiseFIve (){
    try {
        const response=await promiseFive
    console.log(response);
    
    } catch (error) {
        console.log(error);
        
    }
}
consumePromiseFIve()


// async function getAllUsers() {
//  try {
//     const response= await  fetch("https://jsonplaceholder.typicode.com/users")
//  const data=await response.json()
//  console.log(data);
//  } catch (error) {
//     console.log("E: ",error);
    
//  }
 
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
    return response.json()
})
.then(function(data){
console.log(data);

})
.catch(function(error){
console.log(error);

})