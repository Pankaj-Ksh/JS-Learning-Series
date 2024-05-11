// Higher Order Fuction : 
//      A function that returns a function or takes other functions as arguments is called a higher-order function.

const arr = [1, 2, 3, 4, 5]

const area = function(radius){
    return (Math.PI*radius*radius);
}

const cirm = function(radius){
    return (2*Math.PI*radius)
}

const diameter = function(radius){
    return (2*radius)
}

const calculate = function(arr, logic){
    const output = []

    for(let i =0; i<arr.length; i++){
        output.push(logic(arr[i]))
    }
    return output;
}

console.log(calculate(arr, area));
console.log(calculate(arr, cirm));
console.log(calculate(arr, diameter))

// OR 

console.log(arr.map(area));
console.log(arr.map(cirm));
console.log(arr.map(diameter));

// both does the same task