//push zero at the end of array

function moveZeroDSA(arr){
    let result = new Array(arr.length)
    let index = 0

    //step 1: Place non -zero elemests
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==0){
            result[index] = arr[i]
            index++
        }
    }

    //fill remaining postiton with zero
    while(index<arr.length){
        result[index] = 0
        index++
    }

    return result
}

console.log(moveZeroDSA([0, 1, 0, 3, 12]))

//shortcut method
 function moveZeroShortcut(arr){
    const nonZeros = arr.filter(n=>n!==0);
    const zeros = arr.filter(n=>n===0)
    return [...nonZeros, ...zeros]
 }

 console.log(moveZeroShortcut([1, 33, 0, 6, 7]))