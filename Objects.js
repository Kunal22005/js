// Singleton

// object Literals
// Object.create

const mySym = Symbol("Key1")
 

const jsUser = {
    name: "Kunal",
    "full name" : "Kunal Sharma",
    [mySym]: "mykey1",
    age: 18,
    location: "punjab",
    email:"kunalsharma221726@gmail.com",
    isLoggedIn: false,
    lastLoginDays:  ["monday","Sunday"]
}
console.log(jsUser.email)
console.log(jsUser["age"])
console.log(jsUser["full name"])
console.log(typeof jsUser[mySym])
console.log(jsUser["location"])
jsUser.email = "krish221726@gmail.com"
// Object.freeze(jsUser)
// jsUser.email ="Kunalsharma221726@gmail.com"
console.log(jsUser)

jsUser.greeting =function(){
    console.log("Hello JS User")
}
jsUser.greeting2 =function(){
    console.log(`Hello JS User, ${this.name}`)
}
console.log(jsUser.greeting())
console.log(jsUser.greeting2())