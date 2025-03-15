// Remove duplicates from an array in place.


const RemoveDuplicates = ( arr)=>{
return new Set(arr)
}

console.log(RemoveDuplicates([1,234,5,67,5,5,12,1,4]))