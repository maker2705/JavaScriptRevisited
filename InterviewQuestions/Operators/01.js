console.log(1 < 2 < 3);     // Output: true
console.log(3 > 2 > 1);     // Output: false

/*
 * Case 1: (1 < 2 < 3)
 * lets evaluate: 1<2 is 'true' now we compare it with 3 
 * true is coerced to '1' during comparison
 * Now, 1<3 is evaluated as true and is logged to the console.
 */

/*
 * Case 2: (3 > 2 > 1)
 * 3>2 is 'true' which is internally coerced to '1' then 1>1 is compared
 * which is false and so is logged to the console.
 */

