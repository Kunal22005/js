const coding = ["js","cpp","ruby","py"]

const values = coding.forEach( (item)=> {
    // console.log(item)
    return item
} )
console.log(values)


const myNum = [1,2,3,4,5,6,7,8,9,10]
const newNum = myNum .forof((num)=> {return num})
console.log(newNum)
// let newNums = myNum.filter( (num) => {
//     return num > 4
// } )
// console.log(newNums);

// const newNums = [];

// myNum.forEach( (num) => {
    // if(num > 4){
    //     newNums.push(num)
    // }
// } )
// console.log(newNums)