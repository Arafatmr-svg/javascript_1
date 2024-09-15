const user={
    username:"Arafat",
    price:99,
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`); // "this" refers current context

        console.log(this);
        
    }
}
// user.welcomeMessage()
// user.username="Sam"
// user.welcomeMessage()

// console.log(this);


// function one(){
//     let username="fdg"
//     console.log(this.username);
    
// }
// one()

// const chai =function() {
//     let username="Arafat"
//     console.log(this.username);
    
// }
// chai()

// const chai =()=> {
//     let username="Arafat"
//     console.log(this);
    
// }
// chai()



// const addTwo=(num1,num2)=>{
// return num1+ num2
// }

// const addTwo=(num1,num2)=> num1+ num2
// const addTwo=(num1,num2)=> (num1+ num2)


const addTwo=(num1,num2)=> ({username:"Arafat"})

console.log(addTwo(2,4))


const myArray=[2,3,45,6,7]