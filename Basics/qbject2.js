// const tinderUser = new Object()  //singleton Object
const tinderUser = {}  //non Singleton Object
tinderUser.id = "1234abc"
tinderUser.name ="Kunal"
tinderUser.ISLoggedIn = false
console.log(tinderUser)

const regularUser = {
    email: "kunalsharma@gmail.com",
    fullname: {
        userfullname: {
            firstname: "kunal",
            lastname: "sharma",
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser["fullname"]["userfullname"])

const obj1 = {1:"a", 2:"b"}
const obj2 = {1:"c", 4:"d"}

// const obj3 = {obj1,obj2}
// console.log(obj3)


// const obj3 = {...obj1,...obj2}
// console.log(obj3)


const obj3 = Object.assign({},obj1,obj2)
console.log(obj3)

const users =[
    {
        name:"kunal",
        id:1
    },
    {
        name:"kunal",
        id:1
    },
    {
        name:"kunal",
        id:1
    }
]
console.log(users[0].name)

console.log(Object.keys(tinderUser)) // datatype of output is array
console.log(Object.values(tinderUser))
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty('ISLoggedIn'))