let array = [1,2,3,5]

console.log(typeof array)
// -> Object

let object = {
    a: 1
}

console.log(typeof object)


let func = function () {
    console.log(array);
}

console.log(typeof func)
// -> function


function funct(){
    console.log("first")
}
console.log(typeof funct)
// -> function

const date = new Date();
console.log(typeof date)

// -> object
// Here is an example of how you could use a regular expression to find the word "Hello" in a string of text in JavaScript:
const text = "Hello, world!";
const regex = /Hello/;

const result = regex.test(text);
// -> true

console.log(result); // true

console.log(typeof regex);
// -> object

