let array = [1, 3, 44, 65, 9, 77]

function findMinMax(array){
    let min = array[0];
    let max = array[0];

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