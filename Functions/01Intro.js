

function myFunc() {
    console.log("I am a function")
}

myFunc();
    // >> I am a function
function add (n1, n2){
    let result = n1+n2;
    console.log(result)
}

add(3,5);
    // >> 8

//* or 

function add2 (n1, n2) {
    console.log(n1+n2)
}

const result = add2(3,5)

console.log(result)
    // >> undefined

    function add2 (n1, n2) {
        (n1+n2)
    }
console.log(add2(3,5))
    // >> undefined
    function add2 (n1, n2) {
        return (n1+n2)
    }
    console.log(add2(3,5));
        // >> 8
//* Notable thing here is that I have unintentionally used hoisting
//* I stopped changing the name of function after add2() which replaced 
//* previous ones each time I defined the add2() function


function loginUserMessage(username) {
    return `${username} just logged in..`
}
console.log(loginUserMessage("Ankit"));

    