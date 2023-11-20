var y = 1;
if (function f() {}) {
  y += typeof f;
  // y = y + typeof f;
}
console.log(y);

// Output: 1Undefined