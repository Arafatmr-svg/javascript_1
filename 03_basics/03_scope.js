// var c=23
let a=300 ///---- global scope

if (true){
    let a= 10
    const b=20
    // var c=30         //----block scope
    // console.log("Inner : ", a);  
}
// console.log(a);
// // console.log(b);
// // console.log(c);




function func1(){
    const username="Arafat"
    function func2(){
        const website="Youtube"
        // console.log(username);
    }
    // console.log(website);
    func2()
}
func1()

if(true){
    const username="AS"
    if(username==="AS"){
        const website=" google"
        // console.log(username  + website);
        
    }
    // console.log(website);
    
}
// console.log(username);



//----------------------------interesting-----------------------------


console.log(add1(5))

function add1(num){
return num + 1
}


console.log(add2(5));

const add2=function(num){ // function expression are not hoisted

    return num + 2
}
