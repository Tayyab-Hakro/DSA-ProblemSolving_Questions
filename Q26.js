// 4. Find all pairs of an integer array whose sum is equal to a
//  given number.

function SumogPairs(arr , targetSum){
let pair =[];
for(let i = 0 ; i<arr.length ;i++){
    for(let j=1 ;j<arr.length ;j++){
        if(arr[i] + arr[j] == targetSum){
            pair.push(arr[i] ,arr[j])
        }
   }
}
return  pair    
}

    

console.log(SumogPairs([4,5,9,1,6,3,15,21]  ,9))