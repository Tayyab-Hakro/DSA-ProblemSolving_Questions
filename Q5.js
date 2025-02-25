var kidsWithCandies = function(candies, extraCandies) {
    let result = []
    let max = Math.max(...candies)

    for(let i = 0 ; i < candies.length ; i++){
    
        if(candies[i] + extraCandies >= max ){
            result.push(true)
        }else{
            result.push(false)

        }

    }
return result
};

//console.log(kidsWithCandies( [2,3,5,1,3], 3))
console.log(kidsWithCandies( [12,1,12], 10))

// Input: candies = [12,1,12], extraCandies = 10
// Output: [true,false,true]