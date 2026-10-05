const name = "kalpana"
const repoCount = 50

//console.log(name + repoCount + "Value");

console.log(`HELLO MY NAME IS ${name} and my repo count is ${repoCount}`);


const gameName = new String('kalpa-na-pan');
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(3));

console.log(gameName.indexOf('l'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-7, 4)
console.log(anotherString);


const newString1 = "    kalpana    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://kalpana.com/kalpana%20pandey"
console.log(url.replace('%20',"-"));
console.log(url.includes('sapna'));

console.log(gameName.split('-'));



