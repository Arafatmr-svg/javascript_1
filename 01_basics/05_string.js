const name="Arafat";
const repoCount=50

// console.log(`My name is ${name} and my repocount is ${repoCount}`);
// console.log(name +" " + repoCount );

const gameName= new String('pubg-mobile')
// console.log(gameName[2]);
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf("m"));
// const newString=gameName.substring(2,4)

// console.log(newString);

// const anotherString=gameName.slice(1,3)
// const AnotherString=gameName.slice(-8,-3)//negative starts from reverse

// console.log(AnotherString);


// const url="https//www.google%com"
// console.log(url.replace("%","."));
// console.log(url.includes("goog"));


const str='The quick brown fox jumps over the lazy dog.';
const words= str.split(' ');
console.log(words[2]);
const chars = str.split('');// no space between quotes indicates single word only
console.log(chars[8]);
const Chars = str.split(' ');// space between quotes indicates full words 
console.log(Chars[8]);
const strCopy = str.split();
console.log(strCopy);
