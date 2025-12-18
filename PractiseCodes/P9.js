//find secondlargest number in array 

let array = [1, 4, 55, 77]

function findSecondLargest(array){
    let largest = array[0]
    let secondLargest = array[0]
    for(let i=0; i<array.length; i++){
        if(array[i]>largest){
            secondLargest = largest
            largest = array[i]
        } else if(array[i]> secondLargest && array[i]!==largest){
            secondLargest = array[i]
        }
        
    } return secondLargest
    
}

console.log(findSecondLargest(array))