if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function(userFn) {
    const originalArr = this;


    for (let i = 0; i < originalArr.length; i++) {
        userFn(originalArr[i], i);
    }

};
}

const arr = [1, 2, 3, 4];

const ret = arr.myForEach(function (value, index) {
    console.log(`My for Each value at index ${index} is ${value}`);
    
}
);

console.log(`Ret is`,  ret);

