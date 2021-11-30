function removeFromArray(arr, ...otherVals) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < otherVals.length; j++) {
            if (arr[i] === otherVals[j]) {
                arr.splice(i, 1);
                arr[i--];
            }
        }
    }
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3, 2));