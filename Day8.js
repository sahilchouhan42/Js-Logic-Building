//remove duplicate numbers from array

let arr = [1, 2, 3, 4, 4, 6, 2, 3, 7]

function removeDuplicatesDSA(arr){
    let unique = [];
    for(let i=0; i<arr.length; i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}

console.log(removeDuplicatesDSA(arr))


//Shortcut method

function removeDuplicatesShortcut(arr){
    return [...new Set(arr)]
}

console.log(removeDuplicatesShortcut([22, 34, 22, 54, 56, 78, 56]))