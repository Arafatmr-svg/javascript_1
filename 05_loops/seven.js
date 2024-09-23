

const myNumbers=[1,2,3,4,5,6,7,8,9,10]

// const newnums= myNumbers.map( (num)=> {return num + 10})

// console.log(newnums);


//  const newNumbers=[]
//  myNumbers.forEach( (nums)=>{
//     newNumbers.push(nums+10)
//  })
//  console.log(newNumbers);
 
const arr=[1,2,3,4,5,6,7,8,9,10]

const newArr=arr.map( (num)=>num*10)
                .map( (num)=> num+2)// every time it will override the previous value
                .map( (num)=> num-2)
                .filter( (num)=> num>=40)
console.log(newArr);
