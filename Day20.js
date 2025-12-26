let array = [1, 2, 4, 5, 6]

function findSecondLargestDSA(array){
    let n = array.length
    let largest = array[0]
    let seccondLargest = array[0]
    for(let i=0; i<n; i++){
        if(array[i]>largest){
            seccondLargest = largest;
            largest = array[i]
        }

        if(seccondLargest>array[i]&&largest!==array[i]){
            seccondLargest = array[i]
        }
    } return seccondLargest
}

console.log(findSecondLargestDSA(array))

//shorcut method

function findSecondLargestShortcut(array){
    sorted = array.sort((a, b)=>b-a)
    return sorted[1]
}

console.log(findSecondLargestShortcut([1, 44, 55]))