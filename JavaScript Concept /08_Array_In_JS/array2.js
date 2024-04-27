// #1 how to join , concat , and how to use the spread operater.

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)         // Output : [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
console.log(marvel_heros);          // Output : flash

console.log(marvel_heros[3][1]);                         // way to access the elemnts 

const allHeros = marvel_heros.concat(dc_heros)           // .concat can be apply only on the two array at a time
console.log(allHeros);
/*  Output :
    [
     'thor',
     'Ironman',
     'spiderman',
     [ 'superman', 'flash', 'batman' ],
     'superman',
     'flash',
     'batman'
   ]
*/

const all_new_heros = [...marvel_heros, ...dc_heros]     // ... (Spread operator) can be apply only n number of array at a time
console.log(all_new_heros);                              // use this for combining the arrays.
/*  Output :
    [
     'thor',
     'Ironman',
     'spiderman',
     [ 'superman', 'flash', 'batman' ],
     'superman',
     'flash',
     'batman'
   ]
*/

// #2 how to decompress the array of arrays.
const compressed_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const un_compressed_array = compressed_array.flat(Infinity)
console.log(un_compressed_array);                           // Output is : [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]