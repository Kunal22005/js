# Projects related to DOM

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution Code

## Project 1

```javascript
console.log("Kunal")
const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((btn) => {
  console.log(btn);
  btn.addEventListener('click', function (e) {
    console.log(e);
    console.log(e.target);
    if (e.target.id === 'grey') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'white') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'blue') {
      body.style.backgroundColor = e.target.id;
    }
    if (e.target.id === 'yellow') {
      body.style.backgroundColor = e.target.id;
    }
  });
});


```

## project 2
```Javascript

const form=document.querySelector('form')
// this usecase is leads to empty values
// const height=parseInt(e.preventDefault('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if(height==='' || height<0 || isNaN(height)){
        results.innerHTML=`please give valid height ${weight}`
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        results.innerHTML=`please give valid weight ${height}` 
    }
    else{
        const bmi = (weight/((height*height)/1000)).toFixed(2)
        results.innerHTML= `</span>${bmi} </span>`
    }
})

```

## project 3
```javascript

// const clock = document .getElementById('clock')
const clock = document.querySelector('#clock')



setInterval(function(){
    let date = new Date();
    clock.innerHTML=(date.toLocaleTimeString())
},1000)

```

## project 4
```javascript

let randomNumber=(parseInt(Math.random() *10+1));

const submit=document.querySelector('#subt');
const userInput=document.querySelector('#guessField');
const guessSlot=document.querySelector('.guesses');
const remaining= document.querySelector('.lastResult');
const lowOrHi=document.querySelector('.lowOrHi');
const StartOver=document.querySelector('.resultParas');

const p= document.querySelector('p');

let prevGuess = [];
let numGuess  = 1;

let playgame=true;
if(playgame){
    submit.addEventListener('click',function(e){
        e.preventDefault();
        const guess=parseInt(userInput.value);
        console.log(guess);
        validateGuess(guess);
    })
}

function validateGuess(guess){
    if(isNaN(guess)){
        alert('Please Enter Valid Number');
    }else if(guess<1){
        alert('Please Enter Number more than 1');
    }else if(guess>100){
        alert('Please Enter Number less than 100');
    }
    else{
        prevGuess.push(guess);
        if(numGuess===11){
            displayMessage(`Game Over. Random Number was ${randomNumber}`)
            endGame();
        }
        else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    if(guess==randomNumber){
        displayMessage(`You guessed right`);
        endGame();
    }
    else if(guess<randomNumber){
        displayMessage('Number is to low');
    }
    else{
        displayMessage('Number is to high');
    }
}

function displayGuess(guess){
    userInput.value='';
    guessSlot.innerHTML+=`${guess},`;
    numGuess++;
    remaining.innerHTML=`${11-numGuess}`
}

function displayMessage(message){
    lowOrHi.innerHTML=`<h2>${message}</h2>`
}

function endGame(){
    userInput.value='';
    userInput.setAttribute('disabled','')
    p.classList.add('button');
    p.innerHTML=`<h2 id="newGame" >Start new Game </h2>`
    StartOver.appendChild(p)
    playgame=false;

    newGame();
}

function newGame(){
    const newGameButton=document.querySelector('#newGame')
    newGameButton.addEventListener('click',function(e){
        randomNumber=parseInt(Math.random() *10+1);
        prevGuess=[];
        numGuess=1
        guessSlot.innerHTML='';
        remaining.innerHTML=`${11-numGuess}`;
        userInput.removeAttribute('disabled');
        StartOver.removeChild(p);

        playgame=true;
    })
}
```

## project 5
```Javascript

const insert = document.getElementById('insert');

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `<div class='color'>
    <table>
    <tr>
        <th>Key</th>
        <th>KeyCode</th>
        <th>Code</th>
    </tr>
    <tr>
        <td>${e.key === " " ? "space" : e.key}</td>
        <td>${e.keyCode}</td>
        <td>${e.code}</td>
    </tr>
    </table>
    </div>`;

});

```

## project 6
```Javascript

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

```