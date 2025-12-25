//find second largest

function findSecondLargest(arr){
    let largest = arr[0]
    let secondLargest = arr[0]
    for(let i=0; i<arr.length; i++){
        if(arr[i]>largest){
            secondLargest = largest;
            largest = arr[i]
        }

        if(arr[i]>secondLargest && largest!==arr[i]){
            secondLargest = arr[i]
        }
    } return secondLargest
}

console.log(findSecondLargest([1, 55, 77, 87, 0]))

//shortcut method

function findSecondLargestShortcut(arr){
    const sorted = [...arr].sort((a, b)=>b-a)
    return sorted [1]
}

console.log(findSecondLargestShortcut([1, 4, 5, 7, 2]))