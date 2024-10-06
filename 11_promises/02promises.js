// const promise1=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Hey");
//         resolve()
//     },2000)
// })
// promise1.then(function(){
//     console.log("Promise resolved");
    
// })

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("hey im promise two");
//         resolve()
//     },1000)
// }).then(function(){
//     console.log("resolved");
    
// })


// const promise3=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({name:"Arafat",job:"Developer"})
//     },1000)
// })
// promise3.then(function(e){
// console.log(e);

// })

// const promise4=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         // let error=false
//         let error=true

//         if (!error) {
//             resolve({name:"Arafat",job:"Developer"})
//         }else{
//             reject("Error: Something went wrong")
//         }
//     },1000)
// })
// promise4.then(function(user){
// console.log(user);
// return user.job
// }).then(function(job){
// console.log(job);

// }).catch(function(error){
//     console.log(error);
    
// })


// const promiseFive=new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error=false
//         // let error=true
//         if(!error){
//             resolve({username:"Shifat",job:"Developer"})
//         }
//         else{
//             reject("ERROR: JS Code went wrong")
//         }
//         },1000)

// })
// async function consumePromiseFIve() {
//     try {
//         const response=await promiseFive
//         console.log(response);
        
//     } catch (error) {
//         console.log(error);
        
//     }
// }
// consumePromiseFIve()


// async function getAllUsers() {
//     try {
//         const response= await fetch("https://jsonplaceholder.typicode.com/users")
//         const data= await response.json()
//         console.log(data);
        
//     } catch (error) {
//         console.log("E: ",error);
        
//     }
// }
// getAllUsers()

fetch("https://jsonplaceholder.typicode.com/users")
.then(function(response){
   return response.json()
}).then(function(data){
    console.log(data);
    
}).catch(function(error){
    console.log("E:",error);
    
})