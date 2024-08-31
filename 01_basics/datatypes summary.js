//primitivie
// 7
//number,null,string,boolean,bigint,undefined,symbol




const id=Symbol('13')
const anotherId=Symbol('13')
console.log(id);
console.log(anotherId);
console.log(id===anotherId);
const bigint=2445576776467n
console.log(bigint);
console.log(typeof bigint);



//Reference(Non Primitive)

//Array,Objects,Functions

const heros=["Baalveer","Aladin"]//array

let obj={
    name:"baalveer",// object
    job:"snl"
}


// functions


const myFunc =function(){
console.log("Hello miya");

}
console.log(typeof myFunc);

myFunc()


//-------------------------------memory--------------------------

//stack(primitive)
//heap(Non primitive)

let Name="Arafat";
let anotherName= Name
anotherName="Yeasin"
console.log(anotherName);
console.log(Name);

let user={
    email:"adasja@",
    num:"342wr2"
}
let user2=user
user2.email="asfa@"
console.log(user.email);
console.log(user2.email);



