// 2. genrate a HashTag from given string and the first letter of
//  all words should be capital  eg. 'sagarbendale' ==> #SagarBendale

function genrateHashtag(str) {
    let arr = str.split(" ");
    let strArr = arr.map(elem => {
        return elem.replace(elem[0], elem[0].toUpperCase());  // elem.chatAt(0).toUpperCase();
    });
    return `#${strArr.join('')}`;
}
console.log(genrateHashtag('virat kohli'));