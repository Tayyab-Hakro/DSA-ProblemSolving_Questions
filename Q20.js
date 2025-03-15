/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let vowels = s.match(/[aeiouAEIOU]/g); // Get all vowels
    if (!vowels) return s; // If no vowels, return s as is
    
    let result = ''; // To build the final string
    
    for (let i = 0; i < s.length; i++) {
        if ('aeiouAEIOU'.includes(s[i])) {
            result += vowels.pop(); // Replace vowel with the last one in the array
            
        } else {
            result += s[i]; // If not a vowel, keep the character as is
        }
    }
    
    return result;
};
