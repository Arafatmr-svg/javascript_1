// class User{
//     constructor(username,email,password){
//       this.username=username
//       this.email=email
//       this.password=password
//     }
//     encryptPassword(){
//         return `The passwors is  ${this.password}abc`
//     }
//     changeUsername(){
//         return `The username is ${this.username}`
//     }

// }

// const araf=new User("arafat","arafatmr42@gmail.com",4253)
// console.log(araf.encryptPassword());
// console.log(araf.username.toUpperCase());


function User(username,email,password){
    this.username=username
    this.email=email
    this.password=password
}
User.prototype.encryptedPassword=function(){
    return `${this.password}`
}
User.prototype.Name=function(){
    return `${this.username}`
}
const araf= new User('arafat','araafnr@',123)
console.log(araf);

console.log(araf.encryptedPassword());
console.log(araf.username.toUpperCase());

