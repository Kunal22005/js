const coding = ["js","cpp","ruby","py"]

// coding.forEach(  function (item) {
//     console.log(item)
// })
// coding.forEach( (item) => {
//     console.log(item)
// } )

// function printme(item){
//     console.log(item)
// }
// coding.forEach(printme)

// coding.forEach( (item,index,arr) => {
//     console.log(item,index,arr)
// })

const myCoding= [
    {
        language:"Javascript",
        languageFileName: "js",
    },
    {
        language:"Python",
        languageFileName: "js"
    },
    {
        language:"c++",
        languageFileName: "cpp"
    }
]
myCoding.forEach( (item) => {
    console.log(item.language)
})