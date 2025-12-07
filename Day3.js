//Find maximum number

let arr = [1, 2, 6, 9, 41]
function findLargestDSA(arr){
    let largest = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            largest=arr[i]
        }
    } return largest
}

console.log(findLargestDSA(arr))

//Shortcut method

let arr2 = [1, 56, 78, 4]

function findLargestShortcut(arr){
    return Math.max(...arr)
}

console.log(findLargestShortcut(arr2))