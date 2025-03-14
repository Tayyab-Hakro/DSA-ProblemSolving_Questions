// 1. Find the missing number in a given integer array of 1 to
// 100

function FindMissign (x){
    let numbers =10;
let Filtered = []
for(let i = 0; i <numbers ;i++){
    if(!x.includes(i)){
        Filtered.push(i)
    }
}   
return Filtered
}

console.log(FindMissign([1,2,4,5,6,8,9,10]))