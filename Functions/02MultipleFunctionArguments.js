//* Multiple Arguments in a function

//* Single argument
function calculateCartPrice(num1) {
    return num1
}

console.log(calculateCartPrice(200))
    // >> 200
// it's good when we use only single argument
/*
 * If the cart has more items then.. 
 * lets test it  
 */
console.log(calculateCartPrice(200, 500, 700))
    // >> 200

//* it ignored rest of the values 

/*
 * for this we can use rest operator
 * lets see how..
 *
 *  
 */
function shoppingCart(...num1) {
    return num1
}
console.log(shoppingCart(40, 60, 800, 2000))
    // >> [ 40, 60, 800, 2000 ]


   
