//Reapeat Min Max

let array= [1, 2, 45, 67, 99,1000, 3]

function findMinMax(array){
    let min = array[0]
    let max = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]<min){
            min = array[i]
        }

        if(array[i]>max){
            max = array[i]
        }
    } return {min, max}
}

console.log(findMinMax(array))