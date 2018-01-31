
function compression(str) {

    let count = 0;
    let previousChar = str.charAt(0);
    let compressedStr = '';
    let strLength = str.length;
    
    for (let i = 0; i < strLength; i++) {
        var currentChar = str[i];
        if(previousChar === currentChar) {
            count++;
        } else if (count === 0) {
            compressedStr += previousChar;
            previousChar = currentChar;
        } else {
            compressedStr += previousChar + count;
            previousChar = currentChar;
            count = 1;
        }
    }

    if (count === 0) {
        compressedStr += currentChar;
    } else {
        compressedStr += currentChar + count;
    }
    return compressedStr;
}

console.log(compression('aabbbcccccaa'));
console.log(compression('xxyzzzx'));