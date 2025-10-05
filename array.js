const Arr =[0,1,2,3,4,5,"kunal",true];
const myArr= [0,1,2,3,4,5];

const myHeroes = new Array(1,2,3,4,5,6)

console.log(myArr[0]);
 

// Array Methods

myArr.push(6);
myArr.push(7)
myArr.pop()

// myArr.unshift(9,"\"Kunal\"") //add element int o the array from starting position
// myArr.shift() //removes first element from the array and stores it
// console.log(myArr)
// console.log(myArr.includes(9))
// console.log(myArr.indexOf(3))

// const newArr = myArr.join() //join operation is used to convert array into string

// console.log(myArr)
// console.log(newArr)
// console.log(typeof newArr)


//slice,splice

console.log("A",myArr)

const myn1 = myArr.slice(2,4) // used to find any subarray in an array
console.log(myn1)
console.log("B",myArr)

// slice is used for doing modification in an array
const myn2 = myArr.splice(0,5,10,11) // used to remove element from array (location,number of element,if we want to add element in an array)
console.log("C",myArr)
console.log(myn2)