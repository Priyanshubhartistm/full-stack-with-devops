let numberofGuest = 3;

let pizzaSize;
// small <= 2
// medium <= 5
// large <=

/* wrong way

if (pizzaSize <= 2) {
    console.log("small");
    
} else if (pizzaSize <= 5) {
    console.log("medium");
    
} else if (pizzaSize <=6) {
    console.log("large");
    
}
    */


if (numberofGuest <= 2) {
    pizzaSize = "small";

} else if (numberofGuest <= 5) {
    pizzaSize = "medium";           // pizzasize ek undefined variable h, jo memory me h, to phle isme value bharo 

} else {
    pizzaSize = "large";
}

console.log(pizzaSize);


//  internally if, else works on greedy algorithm.
// Greedy:-  jaise hi ek 1st answer milta h, oo bhar aa jata h, 