// generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#';
    for(let i=0; i<6; i++){
        color+= hex[Math.floor(Math.random()*16)]
    }
    return color;
}

console.log(randomColor());

let IntervalId;
document.querySelector('#start').addEventListener('click', function(){
    if(!IntervalId){
        IntervalId=setInterval(function(){
        document.querySelector('body').style.backgroundColor=randomColor();
        },1000)
    }
})

document.querySelector('#stop').addEventListener('click',function(){
    clearInterval(IntervalId);
    console.log("Stopped");
    IntervalId=null;
})