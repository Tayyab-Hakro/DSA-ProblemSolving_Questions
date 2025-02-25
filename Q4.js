// find the getSneakyNumbers is number there is avaible more then one 
var getSneakyNumbers = function(nums) {
 let seen = new Set()
 let duplicate = new Set()
for(let  num of nums){
    if(seen.has(num)){
        duplicate.add(num)
    }else{
        seen.add(num)
    }
    

}
return [...duplicate]
};

console.log(getSneakyNumbers([1,2,3,2,4]))