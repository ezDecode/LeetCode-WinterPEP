/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function (init) {
    let current = init;
    const initial = init;
    return {
        increment: function () {
            return ++current;
        }, decrement: function () {
            return --current;
        }, reset: function () {
            return current = initial;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */


const counter = createCounter(7)
console.log(counter.increment());
console.log(counter.reset());
console.log(counter.decrement());