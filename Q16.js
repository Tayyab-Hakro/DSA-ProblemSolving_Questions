/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
let Sorted = nums.sort((a , b) => a-b);
let resylt = []
while(Sorted.length > 0){
    console.log(Sorted)
    let alice = nums.shift()
    let bob = nums.shift()
    resylt.push(bob , alice)
}
return resylt
}


console.log(numberGame([5,4,2,3]))