function rotateArrayDSA(arr, k){
    let n = arr.length;
    let result  = new Array(n)
    
    k = k%n

    for(let i=0; i<n; i++){
        let newIndex = (i+k)%n;
        result[newIndex] = arr[i]
    }

    return result
}

console.log(rotateArrayDSA([1, 2, 3, 4, 5], 2))

//shortcut method

function rotateArrayShortcut(arr, k){
 k = k%arr.length;
    return arr.slice(-k).concat(arr.slice(0, arr.length-k))
}

console.log(rotateArrayShortcut([10, 20, 30, 40, 50], 1))