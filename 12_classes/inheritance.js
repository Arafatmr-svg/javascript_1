
class User{
    constructor (username){
    this.username=username
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }
    addCourse()
    {
        console.log(`New course was added by ${this.username.toUpperCase()}`);
        
    }
}

const araf=new Teacher("arafat","adjnk@",2344)
araf.addCourse();

const Yeasin=new User("Shifat")
Yeasin.logMe()

console.log(araf instanceof User);
