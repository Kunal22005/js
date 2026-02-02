const score = 400
console.log(score)

const balance = new Number(100.00)
console.log(balance);

console.log(balance.toString())
console.log(balance.toString().length);
console.log(balance.toFixed(2)); //How many Decimal Spaces

const otherNumber = 123.8857

console.log(otherNumber.toPrecision(4)) 

const hundreds = 1000000;
console.log(hundreds.toLocaleString('en-IN'))

// ++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++

console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(2.8))
console.log(Math.ceil(2.2))
console.log(Math.floor(2.8))
console.log(Math.min(2,8))


console.log(Math.random())
console.log((Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min+1))+min) 