// const tinderUser= new Object()  singleton object

const tinderUser={}//  non singleton object

 tinderUser.id="134@"
 tinderUser.name="Shifat"
 tinderUser.isLoggedIn="False"

// console.log(tinderUser);

const regularUser={
    email:"fgfgd@gmail.com",
    fullName:{
        userFullName:{
            firstName:"Yeasin",
            lastName:"Arafat"
        }
    }

}
// Object.freeze(regularUser)
//  regularUser.email="xfgh@"
// console.log(regularUser.fullName.userFullName.lastName);


const obj1={a:"1",b:"2",c:"3"}
const obj2={d:"34",e:"46",f:"56"}
const obj3={g:"34",h:"46",i:"56"}


// const obj4={obj1,obj2,obj3}
// const obj5=Object.assign({},obj1,obj2,obj3)
const obj6={...obj1, ...obj2 , ...obj3}          // spread operator

// console.log(obj4);
// console.log(obj5);
// console.log(obj6);




const users=[
    {
        id:1,
        email:"h@g.com",
        isLoggedIn:true
    },

    {
        id:1,
        email:"h@g.com",
        isLoggedIn:true
    },

    {
        id:1,
        email:"h@g.com",
        isLoggedIn:true
    }
]
users[2].email
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));


