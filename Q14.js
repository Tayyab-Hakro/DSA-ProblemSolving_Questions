var reverseWords = function(sentences){
    return Math.max(...sentences.map(item=>item.split(" ").length))
}

console.log(reverseWords("Hello I am tayyab"))