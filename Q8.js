var reduce = function(nums, fn, init) {
    let val= init
    if(nums === 0){
      return init
    }
      for(let i =0 ; i<nums.length ; i++){
        val = fn( val  , nums[i] )
      }  
      return val
  
  };
console.log( reduce(nums = [1,2,3,4] ,fn = function sum(accum, curr) { return accum + curr; }
, init = 0))
console.log( reduce(nums = [1,2,3,4] ,fn = function sum(accum, curr) { return accum + curr * curr; }
, init = 100))
Output: 130