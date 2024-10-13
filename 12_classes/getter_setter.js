

class User{
    constructor (email,password)
    {
        this.email=email
        this.password=password
    }
    get email(){
        return `${this._email}arafat.com`
    }
    set email(value){
        this._email=value.toUpperCase()
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}
const Arafat=new User("djkjksd@gmail","24ws")
console.log(Arafat.password);
console.log(Arafat.email);

