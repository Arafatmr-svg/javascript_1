// // const userEmail="swjq@.ae"
// const userEmail="false"   /// due to truthy value and falsy value


// if (userEmail) {
//     console.log("Got your email");
    
// }
// else{
//     console.log("email not entered.Please enter a valid email");
    
// }

//  example of truthy value and falsy value


// falsy values

// false,0,-0,BigInt 0n,"",null,NaN,Undefined

//truthy value

// true," ","0",[],{},"false", function(){}

// // const userEmail=[]
// const userEmail=[1]

// if (userEmail.length===0) {
//     console.log("empty");
    
// }
// else{
// console.log("not empty");

// }

// const emptyObject={
//     1:"a",
//     2:"b"
// }

// console.log(Object.keys(emptyObject));
const emptyObject={}

if (Object.keys(emptyObject).length===0) {
    console.log("Empty object");
    
}
else{
    console.log("ok");
    
}

