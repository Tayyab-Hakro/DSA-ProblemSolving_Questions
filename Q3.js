function SumofTwo(arr, target) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            console.log(arr[i])
            // if (arr[i] + arr[j] === target) {
            //     return [arr[i], arr[j]]; // Return the first pair that sums to the target
            // }
        }
    }
    return "No pair found"; // If no valid pair is found
}

console.log(SumofTwo([2, 7, 4, 6], 9)); 
