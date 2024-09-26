/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let stringChars = s.replace(/[^a-zA-Z0-9]/g, '').toUpperCase().split('');
    let lastCharIndex = stringChars.length - 1;
    let firstIndex = 0;

    for (const char of stringChars) {
        if(char !== stringChars[lastCharIndex])
            return false;
        console.log(`${char} - ${firstIndex} - ${lastCharIndex}`);
        lastCharIndex--;
        firstIndex++;
    };
    return true;
};

// const s = "A man, a plan, a canal: Panama"
// const s = "race a car";
const s = "0P";
if(isPalindrome(s))
    console.log('true')
else 
    console.log('false')