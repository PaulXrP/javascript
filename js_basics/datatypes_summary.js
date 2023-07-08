//primitive types

//7 types: String, Number, null, Boolean, Undefined, Symbol, BigInt

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)
console.log(typeof id)

//reference (Non primitive)

//Array, Objects, Functions

const heroes = ["Modi", "SP Mukherjee", "Subhas Chandra Bose"]

let myObj = {
    name: "Paul",
    age: "29",
}

const myfunction = function() {
    console.log("Hello world")
}

console.log(typeof myfunction)
console.log(typeof heroes)
console.log(typeof myObj)

console.log(typeof 42);
// Expected output: "number"

console.log(typeof 'blubber');
// Expected output: "string"

console.log(typeof true);
// Expected output: "boolean"

console.log(typeof undeclaredVariable);
// Expected output: "undefined"