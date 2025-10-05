const myNums = [1,2,3,4,5,6,7]

// const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`)
//     return acc+currval;
// },0)

// myTotal = myNums.reduce((acc,currval) => acc+currval,0)

// console.log(myTotal)

const ShoppingCart = [
    {
        itemName: "JS course",
        price: 3000,
    },
    {
        itemName: "python",
        price: 4000,
    },
    {
        itemName: "Data Science",
        price: 7000,
    },
    {
        itemName: "MObile Application",
        price: 12000,
    }
]
const PriceToPay = ShoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(PriceToPay)