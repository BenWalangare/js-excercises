const sumAll = function (firstNum, secondNum) {
    let finalSum = 0;
    if (firstNum < 0 || (typeof firstNum === 'string' || typeof secondNum === 'string')
        || (typeof firstNum === 'object' || typeof secondNum === 'object')) {
        return "ERROR";
    }
    if (secondNum < firstNum) {
        endNum = firstNum, startNum = secondNum;
    } else {
        endNum = secondNum, startNum = firstNum;
    }

    let sumCond = (endNum - startNum) + 1;
    for (let i = startNum; i <= sumCond; i++) {
        finalSum = finalSum + i;
    }
    return finalSum;
};

console.log(sumAll(1, 123))

/*
Okay, this seems complicated. I think there's another efficient way than this.
As you can see:

At line 3-5, I declared the condition for the nagative intergers/numbers,
array, and string, in which all will return string ERROR. I achieve by creating
if the firstNum < 0 return "ERROR"
if the typeof the function 'string' return "ERROR"
if the typeof the function 'object' (this is other name of array) return "ERROR"

At line 7-11, I created another condition where if the user inputs the
secondNum lower than the firstNum, it will reverse the position and I declare
new variable, the "real" deal variable! :D And if the secondNum is actually not
higher than the firstNum, then I set the new variable.

At line 13, it's the declaration of how long the looping will be. I achieve
this by finding the number between the two, include both number. If this
confuses you, try to use pen and paper and find how many number it will be from
1 to 4. The answer will be 4, which will be 1, 2, 3, and 4.

At line 14-17, that's the sum of the numbers, all of them :D
looping from startNum to endNum and summing the total.
*/