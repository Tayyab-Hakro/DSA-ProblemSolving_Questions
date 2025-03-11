/**
 * @param {number[]} nums
 * @return {number}
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0
    for (let i = 0; i < nums.length; i++) {
        let newArr = [...nums.slice(0, i), ...nums.slice(i + 1)]
        console.log(newArr)
        if (!newArr.includes(nums[i])) sum += nums[i]
    }
    return sum
};


console.log(sumOfUnique([1,2,3,2]))