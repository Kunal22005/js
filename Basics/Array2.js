const marvelheroes = ["thor", "ironman","spiderman"]
const dc_heroes = ["superman","flash", "batman"]

// marvelheroes.push(dc_heroes) //  array also got pushed as an element 
// console.log(marvelheroes)
// console.log(marvelheroes[3][2])

const newArr = marvelheroes.concat(dc_heroes) //concat is used create new array whereas push modifies previous array
console.log(newArr)

const newheroes = [...marvelheroes, ...dc_heroes] // most preferable
console.log(newheroes)

// const another_arr = [1,2,3, [4,5,6],7,[6,7,[4,5]]]

// const real_another_array = another_arr.flat(Infinity)
// console.log(real_another_array)


console.log(Array.isArray("kunal"))
console.log(Array.from("kunal"))

let score1 = 100
let score2 = 200
let score3 = 300
new_arr = Array.of(score1,score2,score3) + Array.from("Kunal")
console.log(new_arr)
