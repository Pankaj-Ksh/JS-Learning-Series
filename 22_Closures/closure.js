// Lexical Scope: In JavaScript, functions have access to variables defined in
// their containing scope, as well as variables defined in any outer scope. This is known as lexical scoping.

// Closure : function bundled with it's lexical environment is known as a closure. 
// whenever function is returned , even if it's vanished in execution context 
// but still it remembers the reference it was pointing to. 

// Uses of Closure
// 1. Module Desgin Pattern
// 2. Currying
// 3. Allow One Function Call
// 4. memorize
// 5. maintaining state in async world
// 6. setTimeouts and etc

let createCounter = function(init) {
    let start_val = init;

    return{
        increment: function(){
            return (++start_val)
        },
        decrement: function(){
            return (--start_val)
        },
        reset: function(){
            start_val = init
            return start_val
        }
    }

};

const counter = createCounter(5);
console.log(counter)
console.log(counter.increment());               // 6
console.log(counter.reset());                   // 5
console.log(counter.decrement());               // 4

/*
    In this example, the createCounter function returns an object that contains three methods 
    (increment, decrement, and reset). These methods are able to access and manipulate the start_val 
    variable, which is defined within the lexical scope of the createCounter function.
*/

