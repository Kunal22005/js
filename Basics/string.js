const name = "Kunal"
console.log(Number(name))
const repoCount = 50
console.log(repoCount.toString())

// console.log(name + repoCount + " Hello")

console.log(`Hello my name is ${name} and my repoCount is ${repoCount}`)
const gameName = new String('Kun-al-Sha-rma')
// console.log(gameName[0])
// console.log(gameName.__proto__)
// console.log(gameName.length)
// console.log(gameName.toLowerCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('u'))

const newString =gameName.substring(0,4)  // it does not take negative values
console.log(newString)

const anotherstring = gameName.slice(4,-2) // as we Know slicing can be done using negative values
console.log(anotherstring)

const newStringOne = "  Kunal  "
console.log(newStringOne)
console.log(newStringOne.trim())  //trimStart and trimEnd are also there if we want to use

const url = "https://Kunal.com//Kunal%20Sharma"

console.log(url.replace('%20','-'))

console.log(url.includes('Kunal')) // check whether keyword is present or not

console.log(gameName.split('-'))
let a="kunalSharma"
console.log(a.slice(2,-2))
console.log(a.substring(0,4))