function firstDuplicateDSA(array){
    let n = array.length;

    for(let i=0; i<n; i++){
        for(let j=i+1; j<n; j++){
            if(array[i]===array[j]){
                return array[i]
            }
        }
    }
    return -1
}

console.log(firstDuplicateDSA([1, 3, 4, 2, 3, 8]))

//shortcut method

function firstDuplicateShortcut(arr){
    const seen =  new Set();

    for(let i=0; i<arr.length; i++){
        if(seen.has(arr[i])) return arr[i]
        seen.add(arr[i])
    }
    return -1
}

console.log(firstDuplicateShortcut([1, 4, 5, 5, 6]))