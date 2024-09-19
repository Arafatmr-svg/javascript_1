
// for loop

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

for (let i = 0;  i < 20; i++) {
    const element = i

    if(element==5){
        // console.log("got 5");
    }
    // console.log(element);
}

  for (let i = 0; i <= 5; i++) {

    // console.log(`outer loop value ${i}`);
    
        for (let j = 0; j <= 5; j++) {
           
            // console.log(`Inner loops value ${j} and inner loop ${i}`);
        //   console.log( i + "*" + j + "=" + i*j);
          
            
        }
    
  }

  for (let index = 1; index < 20; index++) {
    const element =index 
//   console.log(` ${element}`);
    
  }


  let myArray=["flash", "batman","Superman"]
// console.log(myArray.length);

  for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element);
    
  }



  // break and continue


  for (let i = 0; i <= 20; i++) {
      
      if (i==5) {
        console.log("detected 5");
        break
      }
    console.log(`value of i is ${i}`);
    
     
     
  }
  for (let i = 0; i <= 20; i++) {
      
      if (i==5) {
        console.log("detected 5");
        continue
      }
    console.log(`2nd value of i is ${i}`);
    
     
     
  }