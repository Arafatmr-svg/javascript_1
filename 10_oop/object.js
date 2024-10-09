function multi5(num){
    return num*5
}
// multi5.power=2
// console.log(multi5(6));
// console.log(multi5.power);
// console.log(multi5.prototype);


function createUser(username,score){
this.username=username
this.score=score
}
createUser.prototype.increment=function(){
   this.score++
}
createUser.prototype.printme=function(){
    console.log(`Score is ${this.score}`);
    
}
const yeasin= new createUser("Yeasin",90)
const Arafat= new createUser("Arafar",89)

yeasin.printme()
Arafat.printme()
