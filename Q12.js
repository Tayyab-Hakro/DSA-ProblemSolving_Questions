/**
 * @param {number[]} nums
 * @return {number[]}
 */
var separateDigits = function(nums) {
    let arr = []
    for(let i =0;i<nums.length;i++){
         let odi = nums[i].toString().split("");
        for (let j = 0; j < odi.length; j++) {
            arr.push(parseInt(odi[j])); 
        }
    }
return arr

};
console.log(separateDigits([13,25,83,77]))