var kidsWithCandies = function(candies, extraCandies) {
    let maxCandies = Math.max(...candies);  // Get the maximum candy count once
    console.log(maxCandies)
    let result = [];
  
    for (let i = 0; i < candies.length; i++) {
      // Check if adding extraCandies makes kid i's count at least maxCandies
      if (candies[i] + extraCandies >= maxCandies) {
        console.log(candies[i])
        result.push(true);
      } else {
        result.push(false);
      }
    }
    

    return result;
  };
    console.log(kidsWithCandies([2,3,4,5],3))  