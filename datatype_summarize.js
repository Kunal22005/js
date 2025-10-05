// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
// console.log( 23 +7+ "4") //always return a string 
// console.log(43/+0) // return +infinity
// console.log(47/-0) //return -infinity
// const score =100
// const scorevalue=100.3
// const isLoggedIn = false
// const outsideTemp = null;
// let userEmail;
// console.log(outsideTemp)
// console.log(typeof outsideTemp)
// const id = Symbol('123')
// console.log(id)
// const anotherId = Symbol('123')

// console.log(id===anotherId)
// const bigNumber = 34567892434n


// Refernece(Non Primitive)

//Array, Object, Function
// const heros = ["shaktiman", "naagraj", "doga"]
// let myobj={
//     name: "Kunal",
//     age: 19,
// }

// const myFunction = function(){
//     console.log("Hello World")
// }
// console.log(typeof myFunction,typeof outsideTemp)
// console.log(typeof myFunction)
// console.log(typeof( myFunction))

//Javascript is Dynamically typed language here variables can hold differrent value at run time we can chage integer value in string or vice versa we do not require to mention datatype aas we have to mention in c++, java





// Return type of variables
/* 1) PRIMITIVE DATATYPE
    
    Number=>Number
    String=>String
    Boolean=>boolean
    null=>object
    Symbol => Symbol
    undefined => undefined
    Bigint => bigint

    2) Non Primitive
    Arrays => object
    Function => function object
    object => object
    */


/* Stack(Primitive) && Heap(NonPrimitive)*/

let myYoutubename = "KunalSharma"

let anothername = myYoutubename

console.log(anothername)

anothername= "CodeWithChai"

console.log(myYoutubename)
console.log(anothername)

let user = {
    email:"kunalsharma221726.com",
    upi: "kunal123",
}

let user1 = user

user1.email = "Kunal@Google.com",

console.log(user.email)
console.log(user1.email)