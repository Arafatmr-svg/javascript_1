// for of

// ["","",""]
// [{},{},{}]


const arr=[1,2,3,4,5,6]

for (const num of arr) {
    // console.log(num);
    
}


const greetings="hello world!"

for (const greet of greetings) {
    if (greet== " ") { // for avoiding space
        continue
    }

    // console.log(`Each char of greetings is ${greet}`);
    
}


//Maps

const map = new Map()
map.set("BD","Bangladesh")
map.set("UAE","United Arab Emirates")
map.set("KSA","Kingdom Of Saudi Arabia")
map.set("BD","Bangladesh")// not count multiple times

// console.log(map);



for (const [key , value] of map) {
    console.log(key, ':>', value);
    
}



// const myObject={
//     "Game1":"COC",
//     "Game2":"Pubg"
// }                        // for of is not for object

// for (const [key,value] of myObject) {
//     console.log(key);
    
// }



