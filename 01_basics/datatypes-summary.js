// Primitive

// 7 types : string, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];

let myObj = {
    name: "babita",
    age: 18,
}

const myFunction = function(){
    console.log("Hello World")
}

// JavaScript is a dynamically typed language. This means that variable types are determined at runtime.

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

const bigNumber = 347229476482946525628n
console.log(typeof bigNumber)
console.log(typeof myFunction)

// https://262.ecma-international.org/5.1/#sec-11.4.3
