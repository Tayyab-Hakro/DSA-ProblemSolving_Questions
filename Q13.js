
function check(arr){
    arr = arr.toString()
    let sum = 1
    let product = 0
    let total = 0
  for(let i = 0 ; i<arr.length ;i++){
    let Num = arr[i]
    sum =  sum  * Num
    product =  product  + Num
    total = sum - product
}
return total
}

console.log(check(234))