const repeatString = function(string, num) {
    if (string === '' && num) {
        return '';
    }
    let result = '';
    for (i = 0; i < num; i++) {
        result = result + string;
    }
    return (num < 0) ? 'ERROR' : result;
};
console.log(repeatString('', 15))

/*
At line 5, I put empty string so that it will add another string, it will be
useful since I will add another string and you can see how it is relevant
at line 7.

At line 7, it is how I add string after string and of course I use loop to
make it repeat until the condition met.

At line 9, I think it is more efficient to use the ternary condition. Sleek
and much more shorter than the if else in this case.
*/