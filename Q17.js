/**
 * @param {string} s
 * @return {string}
 */
var replaceDigits = function(s) {
    let ans=''
    for(let char of s){
        if(!isNaN(char)){
            let z=ans.charCodeAt(ans.length-1)+parseInt(char)
            ans=ans+String.fromCharCode(z)
            
        }else{
            ans+=char
        }
    }
return ans
};

console.log(replaceDigits("a1c1e1"))