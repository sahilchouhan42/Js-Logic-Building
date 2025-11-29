function findVowels(str){
     str= str.toLowerCase()
    let vowels = 'aeiou'
    let vowelCount= 0
    for(let i=0; i<str.length; i++){
        for(let j=0; j<vowels.length; j++){
            if(str[i]===vowels[j]){
                vowelCount++
            }
        }
    } return vowelCount
    }

console.log(findVowels('vivekmeena'))
console.log(findVowels('sahil'))