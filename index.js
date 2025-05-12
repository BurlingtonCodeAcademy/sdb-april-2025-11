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