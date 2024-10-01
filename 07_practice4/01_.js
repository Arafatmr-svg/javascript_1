const rand=Math.round(Math.random()*100+1)
// console.log(rand);

 const submit=document.querySelector(".box")
   const userInput= document.querySelector(".sub")
   const gusses= document.querySelector(".results")
   const lastResult=document.querySelector(".remaining")
//    console.log(lastResult);
   const p=document.createElement("p")

   let prevGuess=[]
   let numGuess=1
   let playGame=true
  if(playGame){
  submit.addEventListener("click",function(e){
  e.preventDefault()
  const guess=parseInt(userInput.value)
  console.log(guess)
  validateGuess(guess)
  })
  }

   function validateGuess(guess){
//
   }
   function checkGuess(guess){
//
   }
    function displaayGuess(guess){
        //
    }

   function displayeMsg(msg){
    //
   }
    function endgame(){
     
   }
   function newgame(){

   }



