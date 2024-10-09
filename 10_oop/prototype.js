let myHeroes=["Thor","Spiderman"]
let heropower={
    Thor:"Hammer",
    Spiderman:"Sling",

    getSpiderPower:function(){
        console.log(`Spidy power is ${this.Spiderman}`);
        

    }
}
Object.prototype.Arafat=function(){
    console.log(`Arafat is available everywhere`);
    
}

Array.prototype.Yeasin=function(){
    console.log(`Yeasin is everywhere`);
    
}
// heropower.getSpiderPower.Arafat()
// myHeroes.Arafat()
//heropower.Yeasin()// not accessable
// myHeroes.Yeasin()



// Inheritance

const user={
    name:"Arafat",
    email:"arafatmr42@gmail.com"

}
const teacher={
    makeVideo:true
}
const teacherAssistant={
    availability:false
}
const taSupport={
    work:"Assignment",
    fulltime:true,
    __proto__:teacher
}

// teacher.__proto__= user

//modern syntax
//const b=//
 Object.setPrototypeOf(taSupport,teacher)
// console.log(b);

let anotherUsername="Arafat..     "
String.prototype.trueLength=function(){
    console.log(`${this}`);
    console.log(`True lenght is : ${this.trim().length}`);

}
anotherUsername.trueLength()
"Arafat".trueLength()
"Imran".trueLength()