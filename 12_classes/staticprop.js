

class User{
    constructor(username){
     this.username=username
    }
    loggedIn(){
   console.log(`${this.username.toUpperCase()} has logged in`);
   
    }
    static createId(){
        return `123`
    }
}
const araf=new User("Arafat")
// araf.loggedIn()
// console.log(araf.createId())

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}
const shi=new Teacher("Foisal","ajhsjj@")
console.log(shi);
console.log(shi.loggedIn())

