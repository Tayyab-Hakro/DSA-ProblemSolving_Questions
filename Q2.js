Q2 Write a function that will plus element of the array if array less then 9
var plusOne = function(digits) {
    // Start from the last digit
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i] += 1; // Increment if not 9
            return digits;   // Return the updated array
        }
        digits[i] = 0; // If digit is 9, set to 0 and continue loop for carry
    }

    // If all digits were 9 (e.g., [9,9,9] → [1,0,0,0])
    digits.unshift(1);
    return digits;
};

console.log(plusOne([1,2,3])); // [1,2,4]
console.log(plusOne([9]));     // [1,0]
console.log(plusOne([9,9,9])); // [1,0,0,0]
