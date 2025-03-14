// 3. Find the largest and smallest number in an unsorted
// integer array.
function largestSmallest(arr){
let Largest = arr[0];
let smallest = arr[0];
for(let i = 0 ; i<arr.length ;i++){
    if(arr[i+1] > Largest){
        Largest = arr[i]

    }
    if(arr[i+1] < smallest){
        smallest= arr[i]
    }
}
    
return {Largest , smallest}

}

console.log(largestSmallest([27,4,2,90,45,12]))