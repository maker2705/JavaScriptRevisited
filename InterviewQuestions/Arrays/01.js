var myChars = ["a", "b", "c", "d"];
delete myChars[0];
console.log(myChars);   // Output : [empty, b, c, d]
console.log(myChars[0]);    // Output: undefined
console.log(myChars.length);    // Output: 4

    

/*
 * The delete operator will delete the object property and 
 * won't reindex the array or change its length.
 */

