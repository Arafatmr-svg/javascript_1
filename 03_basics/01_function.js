

function func1(){
    console.log("a");
    console.log("r");
    console.log("a");
    console.log("f");
    
}
// func1()

               //parameters
// function addThree(number1,number2,number3){
//    console.log( number1 + number2 +number3 )

// }
//        // arguments
//  let result = addThree(3,4,"7")

 
 function addThree(number1,number2,number3){
//     let result= number1+number2+number3
//     return result
//  console.log(1);// after returning nothing will print
 
return number1+number2+number3
 }
 const result=addThree(1,2,5)

// console.log("Result: ", result);



function user(username="Arafat"){
    // if(username===undefined)
    if(!username)
        {
    console.log("Please give me a proper argument");
    return
    }

    return `${username} just logged in`

    
}

// console.log( user("Arafat"))
console.log( user())

