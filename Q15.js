//Write a functtion that remove and min and max then Sort the array
function SortArr (arr){
    let min  = Math.min(...arr)
    let max  = Math.min(...arr)
let filtered = arr.filter((item ) => item !== min && item !== max)

return filtered.sort((a , b) => a-b)

}

console.log(SortArr([5,3,1,46,8,53]))