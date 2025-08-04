// sbse phle hamne ek khud k prototype banya jiska nam "describe" rakha h, 
// or o ek function le raha h, jo ki console me ek nam ko output karega.
Function.prototype.describe = function() {
    console.log(`Function name is ${this.name}`);
    
};

function greet(name) {        // (name) isko parameter bolte h.
    return `Hello ${name}`;
}

greet()

greet.describe('Priyanshu');  // ('priyanshu') isko argument bolte h.
// Output: Function name is greet

masalaChai.describe()


// y function decleration h
function add(a,b){
    return a+b
}

// y function expression h
const substract = function(a,b){
    return a-b
}

// Arrow function
const multiply = (a,b) => a*b


// 1st class function
function applyOperation(a, b, operation) {
    return operation(a,b)
}

//
const result = applyOperation(5, 4, (x,y) => x/y)


// 

(function(){
    console.log("priya")
}) ()

(function(){

}) ()