//Immediately inveked function expression
//IIFE ka matlab hai Immediately Invoked Function Expression: 
// ek function jo define hote hi turant run ho jata hai.

(function chai(){
    //named iife
    console.log(`DB CONNECTED`);

    
})();


((name) => {
    ///unmaned iife
    console.log(`DB CONNECTED 2 ${name}`);
})('kalpana');
// DB CONNECTED 2 kalpana