function foo() {
    let x = (y = 0);
    x++;
    y++;
    return x;
  }
  
  console.log(foo(), typeof x, typeof y);


//   Output: 1 undefined number


/*
 * let x = (y = 0);: Inside the function foo(), x is declared using let, 
 * initializing it to the value of (y = 0). This assignment also sets y to 0 
 * without explicitly declaring it using var, let, or const. 
 * This means y becomes a global variable.
 */

// whatIf ? 
/**
 * if y was declared using the var then the output would have been : 1 undefined undefined
 * because y isn't accessible outside the function scope
 */

