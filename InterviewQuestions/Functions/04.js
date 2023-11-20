function foo() {
    return;
    {
      message: "Hello World";
    }
  }
  console.log(foo());

//   Ouptput: undefined
// As soon as the function is executed it returns back. giving nothing, 
// so when we prints it, it returns undefined.