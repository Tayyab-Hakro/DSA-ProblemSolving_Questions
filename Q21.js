function PrintN(x){
    if(x === 20) return
    console.log(x)
    return PrintN(x + 1)
}
    PrintN(0)