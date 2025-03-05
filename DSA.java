const evens = nums.reduce((res, num) => res + +!(num % 2), 0);
return Array.from({ length: nums.length }, (_, i) => (i < evens ? 0 : 1));