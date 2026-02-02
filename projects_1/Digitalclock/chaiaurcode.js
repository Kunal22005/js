// const clock = document .getElementById('clock')
// const clock = document.querySelector('#clock')



// setInterval(function(){
//     let date = new Date();
//     clock.innerHTML=(date.toLocaleTimeString())
// },1000)

const clock=document.querySelector('#clock');

// let date=new Date();
// console.log(date);
// console.log(date.toTimeString());
// clock.innerHTML=date.toLocaleTimeString();
let func = function(){
    let date=new Date();
    // console.log(date);
    // console.log(date.toTimeString());
    clock.innerHTML=date.toLocaleTimeString();
    clock.innerHTML+='<br><u>Hello world</u>'
}
setInterval(func,1000);