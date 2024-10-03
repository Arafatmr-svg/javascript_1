//generate random color

const randomColor=function(){
    const hex="0123456789ABCDEF"
    let color="#"
    for (let i = 0;i<6;i++) {
       color+=hex[Math.floor(Math.random()*16)]
    }
    return color
}
let intervalId
const startChangingColor=function(){
    if(!intervalId){
    console.log("Color changing started successfully");
    intervalId=setInterval(changeBgColor,2000)
    }
    function changeBgColor(){
       
        
        document.body.style.backgroundColor=randomColor()
    }

}

const stopChangingColor=function(){
    console.log("color changing stopped successfully");
    
clearInterval(intervalId)
intervalId=null
}

 document.getElementById("start")
 .addEventListener("click",startChangingColor)
document.getElementById("stop")
.addEventListener("click",stopChangingColor)


// document.getElementById("start")
// .addEventListener("click",function(){
//     console.log("started successfully");
    
//       let stop=setInterval(function(){
//         console.log("wsf");
//         },2000)



//         document.getElementById("stop")
//         .addEventListener("click",function(){
//             console.log("cleared successfully");
            
//             clearInterval(stop)
//         })
// })
