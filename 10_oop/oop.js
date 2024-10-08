const user=
{
    name:"Arafat",
    LoginCount:8,
    signedIn:true,
    userDetails: function(){
        // console.log("Got details");
        // console.log(`Username is : ${this.name}`);
        console.log(this);
        
        
        
    }
}
// console.log(user.name);
console.log(user["LoginCount"]);
// console.log(user.userDetails());
console.log(this);



