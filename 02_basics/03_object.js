//singleton
//object.create


//object literals


const mySym=Symbol("key1") // declare a symbol


const JsUser={
    name:"Arafat",
    age:"23",
    "full name":"Yeasin Arafat",
    [mySym]:"mykey1",
    location:"RAK",
    email:"arafatmr@",
    isLoggedIn:"false",
    lastLogIn:["Monday","tuesday"]
}

// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);


// Object.freeze(JsUser) // to freeze the object

JsUser.email="mdr12@"

// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");    
}
JsUser.greeting2=function(){
    console.log(`hello js user,your email is ${this.email}`);    
}
console.log(JsUser.greeting());
console.log(JsUser.greeting2());



