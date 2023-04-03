class InitMath {
  constructor() {
    this.math = require('mathjs');
  }

  // Initializes a math client
  init() {
    return this.math;
  }
linearFunction(a, b, c) {
    // Check if valid input
    if (a === 0) {
        return "Invalide ❌ merci dentrer une valeur d'équation valide.";
    }
    
    // Calculate the solution
    let solution = (c - b) / a;
    
    // Print the solution to the console
    console.log(`The solution of the equation is ${solution}.`);
    
    // Return the solution
    return solution;
}
add(a, b) {
    return a + b;
  }
soustraire(a, b) {
        return a - b;
    }
multiply(a, b) {
        return a * b;
  }
}
module.exports = InitMath;