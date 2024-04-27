// 1. for loop

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is best number");
    }
    console.log(element);
    
}

for (let i = 1; i <= 10; i++) {
    console.log(`Outer loop value: ${i}`);

    for (let j = 1; j <= 10; j++) {
        console.log(`Inner loop value ${j} and inner loop ${i}`);
        console.log(i + '*' + j + ' = ' + i*j );
    }

}


// 2. while, do-while loop

let myArray = ['flash', "batman", "superman"]

while (arr < myArray.length) {
    console.log(`Value is ${myArray[arr]}`);
}


let score = 11
do {
    console.log(`Score is ${score}`);
    score++
} while (score <= 10);



// 3. break and continue

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        break
    }
   console.log(`Value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
   console.log(`Value of i is ${index}`);
    
}