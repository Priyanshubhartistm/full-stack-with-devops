let myArray = [1,3,2,4,5]
let anotherArray = []

function sumfac(numbers){
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }

    return sum
}
let result = sumfac(myArray);
console.log(result);

let anotherResult = sumfac([3,3,2,6,4]);
console.log(`my result is ${anotherResult}`);

