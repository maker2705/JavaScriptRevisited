/* Question: 
 * Consider an array And suppose that someone has extended the prototype by adding a new property. 
 * Iterate through the array, ensuring that only the original properties of the array are accessed 
 * and not the properties added to the array prototype.
 */


Array.prototype.newlyAddedPrototype = "newProperty"

const numbers = [1,2,3,4,5]

for (let num in numbers) {
    console.log(num);
}


/**Output:   
        0
        1
        2
        3
        4
        newlyAddedPrototype
*/

//* But we wanted to loop in only the original properties and it also included the prototype property
//* we can do it using 'hasOwnProperty()' method


for (let num in numbers) {
    if (numbers.hasOwnProperty(num)) 
    {
        console.log(num);
    }
}

// Output: 
// 0
// 1
// 2
// 3
// 4

