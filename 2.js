let array = [2, 35, 55, 7, 9]

function findMinNumber(array){
    let minNumber = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]<minNumber){
            minNumber=array[i]
        }
    } return minNumber
}
console.log(findMinNumber(array))

function findMaxNumber(array){
    let maxNumber = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]>maxNumber){
            maxNumber=array[i]
        }
    }
    return maxNumber
}
console.log(findMaxNumber(array))