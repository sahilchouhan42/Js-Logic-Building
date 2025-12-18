//reverse array

function reverseArrayDSA(arr){
    let n = arr.length;
    let result = new Array(n)
    let j = n-1

    for(let i=0; i<n;i++){
        result[j] = arr[i]
        j--
    }

    return result
}

console.log(reverseArrayDSA([1, 3, 4, 7]))

//shortcut

function reverseArrayShortcut(arr){
    return arr.slice().reverse()
}

console.log(reverseArrayShortcut([2, 4, 66, 7]))