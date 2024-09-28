const buttons=document.querySelectorAll('.button')
console.log(buttons);

const body=document.querySelector("body")
console.log(body);
buttons.forEach(function(button){
    console.log(button);
    button.addEventListener("click",function(e){
console.log(e);
console.log(e.target);
if(e.target.id=="box1"){
body.style.backgroundColor="red"
}
if(e.target.id=="box2"){
body.style.backgroundColor="blue"
}
if(e.target.id=="box3"){
body.style.backgroundColor="gray"
}
if(e.target.id=="box4"){
body.style.backgroundColor="green"
}


    })

})