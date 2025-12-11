//Find min number

let arr = [ 3, 2, 33, 4, 66];
function findMinNumber(arr){
    let min = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i]<min){
            min = arr[i]
        }
    }
    return min
}

console.log(findMinNumber(arr))