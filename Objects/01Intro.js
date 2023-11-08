//* Credits: Chai☕ aur Code</>
const user  = {
    name: "Ankit",
    "Last Name": "N/A",
    age: 20,
    email: "imankit@google.com",
    location: "New Delhi",
    isLoggedIn: true,
    lastLoginDays: ['Sunday', 'Thursday', 'Saturday']
}

console.log(user.name)
    // >> Ankit

//* ->  how to use Symbol data type as "key" in objects.

//* Symbol is a special data type in JS

const mySymbol = Symbol("nickname");
//* In this line, you're creating a Symbol mySymbol with the description "nickname".
const JSUser  = {
    name: "Ankit",
    "Last Name": "N/A",
    [mySymbol]: "Anni",
    age: 20,
    email: "imankit@google.com",
    location: "New Delhi",
    isLoggedIn: true,
    lastLoginDays: ['Sunday', 'Thursday', 'Saturday']
}

//* How to access

console.log(typeof JSUser[mySymbol]);
    // >> string
console.log(JSUser[mySymbol]);
    // >> Anni


    //* I can also freeze this object so that no changes can be made in the object.
// Object.freeze(JSUser);
// JSUser.name = "Anni";
console.log(JSUser)
        //* name won't be updated

JSUser.greetings = function(){
    console.log(`Hello ${this.name}`);
}
JSUser.greetings();

console.log(console.log("first"));
        //* the inner console.log("first") will print "first," and 
        //* the outer console.log will receive the undefined returned by the inner console.log. 
        //* Therefore, the final output will be:
            // >> first
            // >> undefined
