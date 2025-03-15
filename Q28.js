// 5. Find duplicate numbers in an array containing multiple
//  duplicates.
 

function duplicateMultiple(arr){
    let result = []
    for(let i = 0 ; i<arr.length ;i++){
        if(arr[i+1] == arr[i]){
            result.push(arr[i])
        }
    }
return result
}
console.log(duplicateMultiple([1,2,3,3,,4,5]))