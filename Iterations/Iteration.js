// for
// const myArr = [2,3,4,56,5]
// for (let i = 0; i < myArr.length; i++) {
//     const element = myArr[i];
//     if(element == 5){
//         console.log("5 is the best number")
//     }
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//     console.log(`Table of: ${i}`)
//     for (let j = 0; j <= 10; j++) {
//         console.log(i + '*' + j + '=' + i*j)
//     }
    
// }

let myArr = ["flash", "Superman","Batman"]

for (let i = 0; i < myArr.length; i++) {
    const element = myArr[i];
    console.log(element)
}


// break and continue

for (let i = 0; i < 10; i++) {
    if(i==2){
        console.log("Detected 2")
        continue;
    }
    if (i==5){
        console.log("Detected 5");
        break;
    }
    console.log(`value of i is ${i}`)
}