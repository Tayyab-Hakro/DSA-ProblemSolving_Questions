// 2. Find the duplicate 
// number on a given integer array.
 
function FindDuplicates(nums){
    // let Nums = x.slice().sort();
    let result = [];
for(let i = 0 ; i<Nums.length-1 ; i++){
    if(Nums[i +1] == Nums[i]){
result.push(Nums[i])
    }
}
return result
}

console.log(FindDuplicates([1,2,3,3,4,4,5,6,7,8]))