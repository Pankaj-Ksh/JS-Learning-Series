const radius = [1, 2, 3, 4, 5]

const calculateArea = function(radius){
    const output = []
    for(let i=0; i<radius.length; i++){
        output.push(Math.PI*radius[i]*radius[i])
    }
    return output;
}

console.log(calculateArea(radius));


const calculateCirms = function(radius){
    const output = []
    for(let i=0; i<radius.length; i++){
        output.push(2*Math.PI*radius[i]);
    }
    return output;
}

console.log(calculateCirms(radius));


const calculatediameter = function(radius){
    const output = []
    for(let i=0; i<radius.length; i++){
        output.push(2*radius[i])
    }
    return output;
}
console.log(calculatediameter(radius));


// this is bad practise 