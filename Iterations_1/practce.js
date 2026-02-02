console.log("hello World");

let names = function(name){
    console.log("Name:", name);
}

let nam = ["kunal","Abhay","Anuj","Abhinav","Aryan"];

nam.forEach((ele,index,array)=>{
    console.log(`Index ${index}: ${ele} and complete array is: ${array}`);
})