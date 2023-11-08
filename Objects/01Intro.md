## Objects
- Objects are the reference type data types in JavaScript.
- There are many ways to create an object as mentioned below.

    ### 1. Object Constructor
     ```javascript
        const obj = new Object();
     ```
     The above code can also be written as:
     ```javascript
        const obj = Object();
     ```
It is because Object() is a built-in constructor function, so there is no need to use 'new' keyword. 

```javascript
    const person = Object();
    person = {
        name: "Ankit",
        age: 18
    }
```

    Now you might be thinking that I inserted some key-value pairs in the person object.
    But the thing is I just overrode the first person object with the second person object literal.
    If you need to insert the key-value pairs in it then you have to do so by using the (.) dot notation.

    ```javascript
        const person = Object();
        person.name = "Ankit"
    ```
   ### 2. Object's create method 
```javascript
    const object = Object.create(null);
    object.name = "Ankit";
    object.city = "New Delhi";
```       

### 3. Object literal syntax
```javascript
const object = {
    name: "Ankit",
    age: 24,
};
```
Object literal property values can be of any data type, including array, function, and nested object.

