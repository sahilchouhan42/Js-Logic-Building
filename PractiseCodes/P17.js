//remove duplicate from array

let array = [1, 2, 3, 2, 4, 5, 6, 7, 7]

function removeDuplicate(array){
    let unique = [];
    let n = array.length;
    let k = unique.length;
    let x = unique[0]
    for(let i=0; i<n; i++){
        if(array[i]!==x){
            k =array[i]
            k++
        }        
    } return unique

}

console.log(removeDuplicate(array))