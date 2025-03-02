let arr = [[1, 2, 3], [4, 4, 1]];

let a=  arr.map(item  => item.reduce((acc , curr) => acc -curr,0))
console.log(Math.max(...a))