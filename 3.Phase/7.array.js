// two syntax of ARRAY 

let fruits = ["apple", "cheery", "mango"];
let intfruits = new Array("kiwi", "avacado", "dragon fruits");
console.log(typeof fruits);
console.log(typeof intfruits);


fruits[0] = "blueberry";

console.log(fruits[0]);
console.log(fruits.length);


// for new item add in last
fruits.push("new item")
console.log(fruits);

// for new item add in first
fruits.unshift("new item");
console.log(fruits);

// last wale item ko remove kr deta h
intfruits.pop()
console.log(intfruits);

