//find min max in single funtion

let array = [1, 44, 66, 3, 8, 99]

function findMinAndMax(array){
    let min = array[0]
    let max= array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]>max){
            max = array[i]
        }
        if(array[i]<min){
            min = array[i]
        }
    } return {min , max}
}

console.log(findMinAndMax(array))