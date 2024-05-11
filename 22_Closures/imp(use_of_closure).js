// Question :- Allow One Function Call almost

let once = function(fn) {
    let x = false

    function y(...args){
        if(x){
            return undefined
        }
        x = true
        return fn(...args)
    }
    return y;

};

let fn = (a,b,c) => (a + b + c)
let y = once(fn)

console.log(y(1,2,3)); // 6
console.log(y(2,3,6)); // returns undefined without calling fn