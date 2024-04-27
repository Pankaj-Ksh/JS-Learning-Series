// forEach() :- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

const coding = ["js", "ruby", "java", "python", "cpp"]

// different different ways to use 
coding.forEach( function (val) { 
    console.log(val);
} )

coding.forEach( (item) => {
    console.log(item);
} )

coding.forEach( (item, index, arr)=> {
    console.log(item, index, arr);
} )


function printMe(item){
    console.log(item);
}
coding.forEach(printMe)



// forEach on array of Objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
} )