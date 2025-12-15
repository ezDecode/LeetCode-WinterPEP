/**
 * @return {Function}
 */
// var createHelloWorld = function() {
    
//     return function(...args) {
//         return "Hello World"
//     }
// };

/**
 * const f = createHelloWorld();
 * f(); // "Hello World"
 */


// Using the arrow function syntax
var createHelloWorld = () => () => "Hello World";


const hero = createHelloWorld()
console.log(hero());