//Write a function that reverse string with two pointer
function ReverseStr(Str) {
    let left = 0, right = Str.length - 1;
    
    let result = Str.split(""); // Convert string to an array
    console.log(result)
    while (left < right) {
        // Swap characters
        [result[left], result[right]] = [result[right], result[left]];
        left++;
        right--;
    }

    return result.join(""); // Convert array back to string
}





console.log(ReverseStr("Hello"))