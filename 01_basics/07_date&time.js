//-------dates-------

const date=new Date()
// console.log(date.toString());
// console.log(date.toDateString());
// console.log(date.toJSON());
// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(typeof date);



// let myCreateddate= new Date(2024,0,5)  month starts from zero to 11
// let myCreateddate= new Date(2024,5,5,3,10,59)
// console.log(myCreateddate.toLocaleString());
// let myCreateddate= new Date("2024-09-05")
// console.log(myCreateddate.toDateString());
let myCreateddate= new Date("01-13-2024")
// console.log(myCreateddate.toLocaleString());



let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreateddate.getTime());
// console.log(myTimeStamp/1000);
console.log(Date.now()/1000);

console.log(Math.floor(Date.now()/1000));///to convrt ms to s

let newDate=new Date()
console.log(newDate);
console.log(newDate.getDay());
console.log(newDate.getMonth());



console.log(newDate.toLocaleString('default',{
    weekday: "long",
    timeZone: ""
}))



