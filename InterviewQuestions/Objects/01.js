const obj = {
    prop1: function () {
      return 0;
    },
    prop2() {
      return 1;
    },
    ["prop" + 3]() {
      return 2;
    },
  };
  
  console.log(obj.prop1());
  console.log(obj.prop2());
  console.log(obj.prop3());


/* Output:
 * The prop1 is a function that returns 0, so when it's called it returns 1 and is logged to the console.
 */

/* Output: 
 * prop2 is a short hand for function as a prop in objects introduced in ES6.
 * This syntax allows defining the functions inside of an object without the keyword 'function'.
 */