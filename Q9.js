var shuffle = function(nums, n) {
let result = [];
for(let i  = 0 ; i<n ; i++){
   console.log(result.push(nums[i]))  
   console.log(result.push(nums[i + n]))  
}
return result
};

// Example usage:
console.log(shuffle([2,5,1,3,4,7], 3)); // Output: [2,3,5,4,1,7]
//console.log(shuffle([1,2,3,4,4,3,2,1], 4)); // Output: [1,4,2,3,3,2,4,1]
//console.log(shuffle([1,1,2,2], 2)); // Output: [1,2,1,2]
