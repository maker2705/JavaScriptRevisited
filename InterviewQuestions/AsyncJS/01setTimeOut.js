function main() {
    console.log("A");
    setTimeout(function print() {
      console.log("B");
    }, 0);
    console.log("C");
  }
  main();


//   Output: A
//           C
//           B


// Explanation
/*
 * when the main() function is executed it logs 'A' to the console
 * then it encounters the setTimeOut(...){...} which then is deferred to the browser's
 * API environment after the current code execution is complete.
 * Continuing the synchronous execution 'C' is logged to the console after 'A'.
 * Finally, when the call stack is empty (i.e., after 'A' and 'C' are logged), 
 * JavaScript looks at the callback queue and picks up the 'print()' function 
 * waiting there. It then logs 'B' to the console.
 */

