const score = 400
// console.log(score);
const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2)); //decimal k baad 2 zero

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); //number me commas lag jayenge


//+++++++++++++++++++++++++++++MATHS+++++++++++++++++++++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2)) //upr wali value
// console.log(Math.floor(4.6)) //niche wali value
// console.log(Math.min(4,3,6,8))

//important---
console.log(Math.random()); //0 or 1 ke bich me koi random value ayegi
console.log(Math.floor(Math.random()*10) + 1);

const max = 20
const min = 10

console.log(Math.floor(Math.random() * (max - min + 1)) + min)