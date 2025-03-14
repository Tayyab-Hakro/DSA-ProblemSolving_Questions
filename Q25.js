// 3. Find the largest and smallest number in an unsorted
// integer array.
function largestSmallest(arr){
    let max = Math.max(...arr)
    console.log(max)
    let min = Math.min(...arr)
    console.log(min)
    return `Longest number is ${max} amd smllest is ${min}`

}

console.log(largestSmallest([27,4,2,90,45,12]))