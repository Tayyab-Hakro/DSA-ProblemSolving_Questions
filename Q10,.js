//Write a function that will sort array with Bubble Sort

function BubbleSort(arr){
    for(let i = 0 ; i<arr.length -1 ; i++){
        for(let j = 0 ; j<arr.length - i -1 ; j++){
            if(arr[j] > arr[j+1]){
                let tem = arr[j];
                arr[j] = arr[j+1];
              
                arr[j+1] = tem
            }
        }
    }
    return arr

}


console.log(BubbleSort([10,43,65,  -2,-19,-4 ,45,2]))