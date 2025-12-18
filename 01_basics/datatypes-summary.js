// Primitive (call by value)
//7 types : String , Number , Boolean , null (is empty [neither 0 nor empty string]) , undefined(variable is declared but value is not yet decided) , Symbol , BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId); //false

const bigNumber = 34567897373837477423n;
console.log(typeof(bigNumber))

//JavaScript is a dynamically typed language. This means that the type of a variable is determined at runtime by the value it holds, rather than being explicitly declared and fixed at compile time. 

//Reference (Non - primitive)
// Array, Objects, Functions

const heroes = ["shaktiman", "naagraj", "doga"]
let myObj = {
    name : "Koena",
    age : 21,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heroes); //object
console.log(typeof myObj); //object
console.log(typeof myFunction); //function
console.log(typeof id); //symbol