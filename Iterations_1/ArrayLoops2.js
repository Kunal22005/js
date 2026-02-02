const myObject = {
    js: "Javascript",
    cpp: "C++",
    rb: "ruby",
    c: "C language",
    swift: "swift by apple",
}
for (const key in myObject) {
    console.log(`${key} is shortcut for: ${myObject[key]}`)
}

const programming = ["js","rb","py","cpp"]
for (const key in programming) {
    console.log(programming[key])
}

const map =new Map()
map.set("IN", "INDIA")
map.set("IN", "INDIA")
map.set("USA", "United States of America")
map.set("FR", "France")
map.set("UK", "United Kingdom")

for (const key in map) {
    console.log(key)
} // maps are non iterable