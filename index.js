let favoriteSnack = "poptarts"; // Global scope variable


function classroom() {
    let favoriteToy = "tomagachi"; // Local scope variable
    console.log(favoriteSnack); // Accessing global variable
    console.log("local scope", favoriteToy); // Accessing local variable
}

classroom(); // Output: poptarts

console.log("global scope", favoriteToy); // Error: favoriteToy is not defined (local variable cannot be accessed outside the function)