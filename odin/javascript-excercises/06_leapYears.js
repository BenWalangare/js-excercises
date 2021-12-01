const leapYears = function (year) {
    return (year % 4 === 0 && year % 100 !== 0) ? true
    : (year % 400 === 0) ? true : false;
}

console.log(leapYears(7))
// Do not edit below this line
module.exports = leapYears;

/*
    if (year % 4 === 0 && year % 100 !== 0) {
        return true;
    } else if (year % 400 === 0) {
        return true
    } else {
        return false;
    }
}

The code above in the comment is the solution if I want to use the if else
condition. Since the ternary operator is much shorter and straigforward, better
to use it here

Ternary conditional is magic, as you can see:
At line 2, I return the value to true, if the condition inside the parentheses
is true. The condition askes if the year modulo 4 is 0 and also the year modulo
100 is not zero, it returns true.

at line 3, the condition inside the parentheses is trying to make an exception
if it is year modulo 400 equal to 0, then the condition of year % 100 is no
longer valid, instead the 400 % 0 returns true. At the right handsight , it
returns false if the condition is other than the mentioned before.
*/