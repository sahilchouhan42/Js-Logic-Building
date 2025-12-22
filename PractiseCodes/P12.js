//find largest in array

let array = [1, 44, 55, 7, 99]

function findLargestDSA(array) {
    let largest = array[0]
    for (let i = 0; i < array.length; i++) {
        if (array[i] > largest) {
            largest = array[i]
        }

    } return largest

}

console.log(findLargestDSA(array))

//shortcut

function findLargestShortcut(arr){
    return Math.max(...arr)
}

console.log(findLargestShortcut([1, 44, 56, 76, 101]))