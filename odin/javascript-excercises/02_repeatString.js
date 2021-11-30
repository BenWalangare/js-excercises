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