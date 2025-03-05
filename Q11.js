var leftRigthDifference = function(nums) {
    let leftSum = 0;
    let rightSum = nums.reduce((sum,curr)=>sum += curr,0);
    return nums.map((curr,i)=>{
        //leftSum - (rightSum - curr)
        rightSum -= curr;
        console.log(rightSum)
        let res = Math.abs(leftSum - rightSum );
        leftSum += curr;
        return res
    });
};

console.log(leftRigthDifference([10,4,8,3]))