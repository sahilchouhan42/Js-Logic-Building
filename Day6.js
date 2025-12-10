let arr = [10, 5, 8,9, 3]

function secondLargestDSA(arr){
    let largest = -Infinity;
    let second = -Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest = arr[i]
        }
    }

    for(let i=0;i<arr.length; i++){
        if(arr[i]!==largest && arr[i]>second){
            second = arr[i]
        }
    }

    return second
}

console.log(secondLargestDSA(arr))


//Method 2 --- shortcut
function secondLargestShortcut(arr){
    const sorted = [...arr].sort((a, b)=>b-a)
    return sorted[2]
}

console.log(secondLargestShortcut(arr))