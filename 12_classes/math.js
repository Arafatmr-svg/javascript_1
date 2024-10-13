
const descriptor=Object.getOwnPropertyDescriptor(Math,"PI")

console.log(descriptor);
 
// const araf=Object.create(null)
// console.log(araf);
const yeasin={
    name:"Arafat",
    job:"Developer",
    isloggedIn:true,
    orderJob: function(){
      console.log("djnkjkdv")
    }
}

console.log(Object.getOwnPropertyDescriptor(yeasin,"name"))


Object.defineProperty(yeasin,"name",{
    //  value:"shifat",
    // writable: false,
    enumerable:false
})


// console.log(Object.getOwnPropertyDescriptor(yeasin,"name"))

for (let [key,value] of Object.entries(yeasin)) {
    if(typeof value !=="function"){
        console.log(`${key}:${value}`);
    }
}


