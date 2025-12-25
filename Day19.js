//Dsa method

let arr = [1, 0, 2, 4, 0, 6]

function moveAllZeroDSA(arr){
    let n = arr.length;
    let newArray = new Array(n)
    let j=0
    for(let i=0; i<n; i++){
        if(arr[i]!==0){
            newArray[j]=arr[i]
            j++
        }
    }

    for(let i=j;i<n;i++){
        newArray[i]=0
    }
     
    return newArray
}   

console.log(moveAllZeroDSA(arr))


//shortcut method

function moveAllZeroShortcut(arr){
    let nonZero = arr.filter(x=>x!==0);
    let zero = arr.filter(x=>x===0)
     return [...nonZero,...zero]
}

console.log(moveAllZeroShortcut([1, 0, 55, 77, 0, 55, 78]))