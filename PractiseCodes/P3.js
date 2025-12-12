//find max number

let arr = [1, 22, 3, 56, 78, 101, 65]

function findMaxNumber(arr){
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]>max){
            max = arr[i]
        }
    }
    return max
}

console.log(findMaxNumber(arr))