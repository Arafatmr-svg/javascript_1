//Array

const myArr=[0,1,2,3,4,5,6]

const myHeros=["thor","ironman","spiderman"]
const myArr2=new Array(1,2,3,4)

// console.log(myArr[0]);

//Array methods
// myArr.push(8)
// myArr.push(9)// add elm to last

// myArr.pop()// removes last element


// myArr.unshift(0) //add in the first
// myArr.shift() //removes first elm

// console.log(myArr.includes(3));
// console.log(myArr.indexOf(2));


// const newArray=myArr.join()

// console.log(myArr);
// console.log(newArray);// chnages the type


//slice,splice


console.log("a",myArr);
const myA1=myArr.slice(1,3) // cuts the value from array only


console.log(myA1);
console.log("b",myArr);


const myA2=myArr.splice(1,3)// removes the index from given range and return a new array
console.log("c",myArr);

console.log(myA2);





