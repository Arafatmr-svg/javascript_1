const user=
{
    name:"Arafat",
    LoginCount:8,
    signedIn:true,
    userDetails: function(){
        console.log("Got details");
        // console.log(`Username is : ${this.name}`);
        console.log(this.name)
        
        
        
        
    }
}
// console.log(user.name);
// console.log(user["LoginCount"]);
// console.log(user.userDetails());
// console.log(this);



// Constructor

function User(username,age,job){
    this.username=username
    this.age=age
    this.job=job
     
    
    return this
}
const userOne=new User("Arafat",24,"developer")
const userTwo=new User("Yeasin",24,"Salesman")

console.log(userOne);
console.log(userTwo);


console.log(userOne.construcctor);

console.log( userOne instanceof User);

console.log(userTwo instanceof Object);

