

const myNums =[1,2,3,4]

// const myTotal=myNums.reduce(function (acc,curr){
//     console.log(`acc: ${acc} and curr: ${curr}`);
    
//     return acc+curr
// },0)

const myTotal=myNums.reduce( (acc,curr)=> acc+curr,0)
// console.log(myTotal);


const shoppingCart=[
    {
        itemname:"js course",
        price:2999
    },
    {
        itemname:"c++",
        price:3000

    },
    {
        itemname:"python",
        price:1000
    }
]
const price=shoppingCart.reduce( (acc,curr)=>acc+ curr.price,0)
console.log(price);
