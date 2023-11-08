const obj1 = {1:"a", 2: "b"}
const obj2 = {3:"c", 4: "d"}

const obj3  = {obj1, obj2};

console.log(obj3)
    // >> { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

const obj4 = Object.assign({}, obj1, obj2)

console.log(obj4)
    //  >> { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }

const obj5 = Object.assign(obj1, obj2)
    //* the only difference between this and the above assignment
    //* is that in the first one the target object is an empty object.
    //* whereas in the second one the target objetc is obj1.
    /*
     * 
     */
console.log(obj1)
//* we can also use the spread operator for this
    
const obj6 = {...obj1, ...obj2}

console.log(obj6);

