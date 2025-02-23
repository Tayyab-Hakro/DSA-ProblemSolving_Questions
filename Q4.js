var getSneakyNumbers = function(nums) {
 let seen = new Set()
 let duplicate = new Set()
for(let  num of nums){
    if(seen.has(num)){
        duplicate.add(num)
        console.log(duplicate)
    }else{
        seen.add(num)
    }
    

}
return [...duplicate]
};

console.log(getSneakyNumbers([1,2,3,2,4]))