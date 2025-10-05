// for of loop

// ["","","",""]
// [{},{},{},{}]

const arr = [1,2,3,4,5,6]

for (const i of arr) {
    console.log(i)
}

const greetings = "Hello World"

for (const greet of greetings) {
    console.log(`Each char is: ${greet}`)
}

// Maps

const map =new Map()
map.set("IN", "INDIA")
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("UK", "United Kingdom")

console.log(map);

for (const [key,value] of map) {
    console.log(key+ ":-" +value)
}
const myObject = {
    'game1':'NFS',
    'game2':'Sppiderman'
}
// for (const [key,value] of myObject) {
//     console.log(key + ':' + value)
// }