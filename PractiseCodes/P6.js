//find vowels

function findVowels(str){
    let vowels='aeiou'
    let vowelsCount = 0;
    str = str.toLowerCase();
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(str[i]===vowels[j]){
                vowelsCount++
            }
        }
    } 
    return vowelsCount
}

console.log(findVowels('sahil'))