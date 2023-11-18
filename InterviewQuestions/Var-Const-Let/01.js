function varExample() {
    if (true) {
        var x = 10;
    }
    console.log(x); // Output: 10 (accessible due to function scope)
}
console.log(x) // Output: ReferenceError: x is not defined (function-scoped)

function letExample() {
    if (true) {
        let y = 20;
    }
    console.log(y); // Output: ReferenceError: y is not defined (block-scoped)
}

