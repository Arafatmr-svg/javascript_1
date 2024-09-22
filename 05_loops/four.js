const myObject={
    "js":"JavaScript",
    "cpp":"C++",
    "rb":"Ruby",
    "swift":"Swift by apple"
}

for (const key in myObject) {
   console.log(`${key}  shortcut is for ${myObject[key]}`);
   
}


const programming=["js","cpp","python"]

for (const key in programming) {
    console.log(programming[key]);
    
}


// const map = new Map()
// map.set("BD","Bangladesh")
// map.set("UAE","United Arab Emirates")
// map.set("KSA","Kingdom Of Saudi Arabia")
// map.set("BD","Bangladesh")

// for (const key in map) {
//    console.log(key);
   
// }