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
console.log(myCreateddate.toLocaleString());



let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreateddate.getTime());
console.log();


