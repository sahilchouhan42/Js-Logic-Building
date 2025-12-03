let array = [10, 5, 8, 20, 2, 15]

function findSecondLargest(array){
    let largest = array[0]
    let secondLargest = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            largest = array[i]
        } else if(array[i]> secondLargest && array[i]!==largest){
            secondLargest = array[i]
        }
        
    } return secondLargest
    
}

console.log(findSecondLargest(array))