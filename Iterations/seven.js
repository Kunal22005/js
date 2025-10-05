const numbers =[1,2,3,4,5,6,7,8]

// const newNums=numbers.map((num) =>{ return num +10})

newNums = numbers
          .map((num) => num * 10)
          .map((num) => num + 1)
          .filter((num) => num>=40) // filter only return which are true whereas in maps operation is performed on the value
        
console.log(newNums);