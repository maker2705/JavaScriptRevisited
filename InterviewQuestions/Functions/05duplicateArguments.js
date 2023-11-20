//* output of below code in non-strict mode

function printNumbers(first, second, first) {
    console.log(first, second, first);
  }
  printNumbers(1, 2, 3);

// Okay, so non strict mode allows duplicate arguments passed through a function.
/**
 * But here is the catch, it considers the last occuring duplicate argument
 *
 */