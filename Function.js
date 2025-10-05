
// function sayMyName(){
//     console.log("K");
//     console.log("U");
//     console.log("N");
//     console.log("A");
//     console.log("L");
// }
// sayMyName()

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2)
// }
function addTwoNumbers(number1,number2){
    return (number1 + number2)
}
const result = addTwoNumbers(3,5) //while calling a function values we pass are arguments

// console.log("Result:",result)

// function loginUserMessage(username= "Krish"){
//     if(!username){
//         console.log( "Please Enter The User Name")
//         return
//     }
//     return `${username} just logged In`
// }
// console.log(loginUserMessage("Kunal"))

function calculateCartPrice(val1, val2, ...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,2000))

const user = {
    username: "kunal",
    price: 199,
}
function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
}
// handleObject(user)
handleObject({
    username: "kunal",
    price: 499
})

const newArray = [10,20,30,40]

function returnSecondValue(newArray){
    return newArray[1];
}
console.log(returnSecondValue([1000,2000,3000,4000]))

