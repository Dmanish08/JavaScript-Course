// Immediately Invoked Function Expressions

(function func(){                           //named IIFE           
    console.log(`Something is printed`);
})();

((name) => {                                // unnamed IIFE
    console.log(`Something is printed ${name}`);
})(`Chandrachood`)
