// if
// const isUserLoggedIn = true;
// const temperature = 40;
// if(temperature < 50){
//     console.log("less than 50")
// }
// else{
//     console.log("temperature greater than equal to 50")
// }

const score=200;

// if(score >100){
//     const power = "fly"
//     console.log(`user power : ${power}`)
// }

// console.log(`user power: ${power}`)

const balance = 1000

// if(balance>500) console.log("test1"),console.log("test2")

// if(balance<500){
//     console.log("less than")

// }else if(balance<750){
//     console.log("less than")
// }else if(balance<900){
//     console.log("less than")
// }
// else{
//     console.log("less than 1200")
// }\

// const isUserLoggedIn=true;
// const debitCard=true;
// const isLoggedInFromEmail=true;
// if(isUserLoggedIn && debitCard){
//     console.log("Allow User to User Log In")
// }
// if(isUserLoggedIn || isUserLoggedInFromEmail){
//     console.log("Allow User")
// }


// switch (key){
//     case 1:

//     case 2:

//     case 3:

//     case 4:

//     default:
// }


const month=3

switch (month){
    case 1:
        console.log("January")
        break;
    case 2:
        console.log("febuary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("april")
        break;
    default:
        console.log("default case")
        break;
}

// break is used to stop the control flow otherwise all the code will be executed after the any case is executed except default

const userEmail = []

if(userEmail){
    console.log("Got user Email")
}
else{
    console.log("Don't have user Email")
}


// false value

// false,0,-0,BigInt,0n,null,undefined,NAN,""

// true value

// "0",'false'," ",[],{},function(){}

// if (userEmail.length==0) {
//     console.log("Array is Empty")
// }

const emptyObj = {}

if (Object.keys(emptyObj).llength==0) {
    console.log("Array is Empty")
}