

function setUsername(username){
    // complex db calls
this.username=username
console.log("called");

}


function createUser(username,email,password){
    setUsername.call(this,username)
    
    this.email=email
    this.password=password
}
const araf= new createUser("Arafat","arafatmr42@gmail.com","4253")
console.log(araf);
