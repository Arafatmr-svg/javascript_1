// // const buttons=document.querySelectorAll('.button')
// // // console.log(buttons);

// // const body=document.querySelector("body")
// // // console.log(body);
// // buttons.forEach(function(button){
// //     // console.log(button);
// //     button.addEventListener("click",function(e){
// // console.log(e);
// // // console.log(e.target);
// // if(this.id=="box1"){
// // body.style.backgroundColor="red"
// // }
// // if(this.id=="box2"){
// // body.style.backgroundColor="blue"
// // }
// // if(this.id=="box3"){
// // body.style.backgroundColor="gray"
// // }
// // if(this.id=="box4"){
// // body.style.backgroundColor="green"
// // }


// //     })

// // })



// //



// const buttons = document.querySelectorAll('.button');
// const body = document.querySelector("body");

// buttons.forEach(function(button) {
//     button.addEventListener("click", function() {
//         switch (this.id) {
//             case "box1":
//                 body.style.backgroundColor = "red";
//                 break;
//             case "box2":
//                 body.style.backgroundColor = "blue";
//                 break;
//             case "box3":
//                 body.style.backgroundColor = "gray";
//                 break;
//             case "box4":
//                 body.style.backgroundColor = "green";
//                 break;
//         }
//     });
// });




const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body");

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        console.log("Button clicked: " + this.id);
        switch (this.id) {
            case "box1":
                body.style.backgroundColor = "red";
                break;
            case "box2":
                body.style.backgroundColor = "blue";
                break;
            case "box3":
                body.style.backgroundColor = "gray";
                break;
            case "box4":
                body.style.backgroundColor = "green";
                break;
        }
    });
});
