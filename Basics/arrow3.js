const user = {
    username : "kunal",
    price : 999,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);  
        console.log(this)
    }
}
// user.welcomeMessage()
// user.welcomeMessage() 
// user.username = "krish"
// user.welcomeMessage()

console.log(this)
// function chai(){
//     let username = "kunal"
//     console.log(this.username)
// }
// chai()

// const chai = function(){
//     let username = "kunal"
//     console.log(this.username)
// }
// chai()

const chai = () => {
    let username = "kunal"
    console.log(this.username);
}
chai()


// Arrow sunction 

// const addTwo = (num1,num2) => {
//     return num1+num2                        // explicit return
// }
// const addTwo = (num1,num2) =>  num1+num2

// const addTwo = (num1,num2) =>  (num1+num2)  //implicite return

// const addTwo = (num1,num2) =>  ({username:"kunal"})

// const addTwo = () => {
//     arr= [2,3,4,5,6]
//     person ={
//         username:"kunal",
//         user_id: 2342
//     }
//     // return person
//     return arr
// }
const person = {
    username:"kunal",
    user_id:2343
}


const addTwo = () => ({username:"kunal"})
console.log(addTwo())




const arr = [3,4,5,5,6]

arr.forEach(function(){})
arr.forEach(()=>{})
