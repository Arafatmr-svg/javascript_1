

// // const box=document.getElementById("box")
//  setInterval (function(){
//     let date=new Date();
//     box.innerHTML=date.toLocaleTimeString()
    
//  },1000)

const box = document.getElementById('box');
// const clock = document.querySelector('#clock')

setInterval(function () {
  let date = new Date();
  // console.log(date.toLocaleTimeString());
  box.innerHTML = date.toLocaleTimeString();
}, 1000);

