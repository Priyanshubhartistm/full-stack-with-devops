Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
    
};

function greet() {
    return `hello ${name}`;
}

greet.describe(); // Output: Function name is greet
