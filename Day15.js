//check if array are sort

function isSortedDSA(arr){
    for(let i=0; i<arr.length-1; i++){
        if(arr[i]>arr[i+1]){
            return false
        }
    }
    return true
}

console.log(isSortedDSA([1, 3, 4, 2]))
console.log(isSortedDSA([1, 2, 3, 4]))

//

function isSortedShortcut(arr){
    const sorted = [...arr].sort((a, b)=>a-b);
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==sorted[i]) return false
    }
    return true
}

console.log(isSortedShortcut([4, 5, 6, 7]))
console.log(isSortedShortcut([4, 5, 7, 6]))