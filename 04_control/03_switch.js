

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

let month= 4

switch (month) {
    case 1:
        console.log("jan");
        
        break;
    case 2:
        console.log("feb");
        
        break;
    case 3:
        console.log("march");
        
        break;
    case 4:
        console.log("april");
        
        break;

    default:
        console.log("default case match");
        
        break;
}




//Nullish coalescing operator(??): Null ,Undefined


let val1;
// val1=5??10

// val1=null??4

// val1=null??undefined
 val1= null?? 10??15
// console.log(val1);



// ternary operator(?)

// condition ? true : false

const iceTeaprice=77

iceTeaprice >= 80 ? console.log("Greater than 80"): console.log("less than 80");



