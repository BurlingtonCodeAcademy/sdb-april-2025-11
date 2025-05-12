let favoriteSnack = "poptarts"; // Global scope variable

function classroom() {
    let favoriteToy = "tomagachi"; // Local scope variable
    console.log(favoriteSnack); // Accessing global variable
    console.log("local scope", favoriteToy); // Accessing local variable
}

classroom(); // Output: poptarts

// console.log("global scope", favoriteToy); // Error: favoriteToy is not defined (local variable cannot be accessed outside the function)

console.log("global scope", favoriteSnack); // Output: poptarts (global variable can be accessed anywhere in the code)

sayHello(); // Output: hey there!

function sayHello() {
    console.log("hey there!")
}

var name;

console.log(name); // Output: undefined (hoisting: variable is declared but not initialized)

name = "John"

console.log(name); // Output: John (variable is now initialized)

let x = 12;

scope(); // Output: 33 (local variable x is accessed inside the function)
console.log(x); // Output: 12 (global variable x is not affected by the local variable x in the function scope)

function scope() {
    let x = 33;
    console.log(x)
}

// new part to examine
let y = 22
console.log("the first y", y); // Output: 22 (global variable y)

function reassignY() {
    console.log(y); // Output: 22 (global variable y is accessed inside the function)
    y = 44;
    console.log(y) // Output: 44 (local variable y is accessed inside the function)
}

reassignY(); // Output: 44 (local variable y is accessed inside the function)
console.log(y); // Output: 44 (global variable y is now changed to 44 due to the assignment in the function)

y = "ted"

console.log("the second y", y); // Output: ted (global variable y is now changed to "ted")