let arr1 = [1, 2, 3, 4]
let arr2=[3, 4, 5, 6]

function findDuplicate(arr1, arr2){
    let newArray = []
    let k = 0;
    for(let i=0; i<arr1.length; i++){
        for(let j=0; j<arr2.length; j++){
            if(arr1[i]===arr2[j]){
                newArray[k]=arr1[i];
                k++
            }
        }
    } return newArray
}

console.log(findDuplicate(arr1, arr2))

//shortcut method
function findDuplicateShortcut(arr1, arr2){
    return [...new Set(arr1.filter(x=>arr2.includes(x)))]
}

console.log(findDuplicateShortcut(arr1, arr2))