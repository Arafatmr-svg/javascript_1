const marvel_heros=["thor","Spiderman","Ironman"]

const dc_heros=["Superman","Batman","Flash"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);

// let b=marvel_heros.concat(dc_heros)
// console.log(b);
// const all=[...marvel_heros,...dc_heros]// spread operator
// console.log(all);
// const a=all.join("+")
// console.log(a);

const anotherArray=[1,2,3,4,[5,6,7],8,[9,10,[11,12]]]
 const real=anotherArray.flat(Infinity)     //multiple array to single array
 console.log(real);

 console.log(Array.isArray("Arafat"));
 console.log(Array.from("Arafat"));
 console.log(Array.from({name:"Arafat"}));
 
 let score1=100
 let score2=200
 let score3=300
 console.log(Array.of(score1,score2,score3));
 console.log(Array.isArray(marvel_heros));
 