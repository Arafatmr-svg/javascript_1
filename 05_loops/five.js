// for each

const coding=["js","ruby","python"]

coding.forEach( function (val) {
// console.log(val);

}  )                   //callback function does not contain name

coding.forEach(  (val)=> {
// console.log(val);

}  )                   //callback function does not contain name




function printMe(item){
    // console.log(item);
    
}
coding.forEach(printMe)



// coding.forEach( (item,index,arr)=> {
//     console.log(item,index,arr);
    
// })

const myCoding=[
    {
        languagename:"js",
        languageFileName:"Javascript"
    },
    {
        languagename:"c++",
        languageFileName:"cpp"
    },
    {
        languagename:"python",
        languageFileName:"py"
    }
]

myCoding.forEach( (item)=>{
    console.log(item.languagename);
    
})