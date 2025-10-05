// Immediately Invoked function Expression

(function chai(){
    // named IIFE
    console.log(`DB Connected`)
})();

((name) => {
    console.log(`My name is: ${name}`)
})("kunal")