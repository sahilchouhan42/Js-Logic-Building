//find missing number

function findMissingNumberDSA(arr, n){
    let totalSum = (n*(n+1))/2
    let actualSum = 0;

    for(let i=0; i<arr.length; i++){
        actualSum+=arr[i]
    }
    return totalSum-actualSum
}

console.log(findMissingNumberDSA([1, 2, 4, 5], 5))

//shortcut method

function findMissingNumberShortcut(arr, n){
    const actualSum = arr.reduce((sum, num)=>sum+num, 0)
    const totalSum = (n*(n+1))/2
    return totalSum-actualSum
}

console.log(findMissingNumberShortcut([1, 2, 4, 5], 5))