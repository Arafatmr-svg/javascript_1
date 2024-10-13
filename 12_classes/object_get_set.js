const User={
    
    _email:"arafatmr42@gmail.com",
    _password:"asdjdjks445",

    get email(){
    return this._email.toUpperCase()
    },
    set email(value){
     this._email=value
    },
    get password(){
    return this._password.toUpperCase()
    },
    set password(value){
     this._password=value
    }

     
}
 const Arafat= Object.create(User)
 console.log(Arafat.email)
 console.log(Arafat.password)
 ;
 
