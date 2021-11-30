const reverseString = function(str) {
    if (str === '') {
        return '';
    }
    newArr = [];
    let myArr = str.split('');
    for (i = 0; i < str.length; i++) {
        newArr += myArr.pop();
    } 
    return newArr;
};
console.log(reverseString('123! abc!'));