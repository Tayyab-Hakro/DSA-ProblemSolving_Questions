/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let matcher = s.match(/[aeiouAEIOU]/g)
    for(let i= matcher.length-1 ; i>0 ;i--){
        return matcher[i]

    }
    
};