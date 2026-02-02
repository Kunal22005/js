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