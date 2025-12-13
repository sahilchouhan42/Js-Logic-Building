//remove duplicates from array

let array=[1, 2, 2, 4, 5, 6, 4, 77, 23, 22, 23]

function removeDuplicates(array){
    let newArray = []
    for(let i=0; i<array.length; i++){
        let alreadyExist = false;
        for(let j=0; j<newArray.length; j++){
            if(array[i]===newArray[j]){
                alreadyExist = true;
                break
            } 
        }
        if(!alreadyExist){
            newArray[newArray.length]=array[i]
        }
    } return newArray
}

console.log(removeDuplicates(array))