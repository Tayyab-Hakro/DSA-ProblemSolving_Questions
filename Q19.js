/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    s =  s.trim()
    let word = s.split(" ")
    return word[word.length -1].length
    };

    console.log(lengthOfLastWord("hello world"))