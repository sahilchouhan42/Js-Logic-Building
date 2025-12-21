function findVowelsDSA(str){
    str = str.toLowerCase()
    let vowels = 'aeiou'
    let vowelsCount = 0;
    for(let i=0; i<str.length; i++){
        for(j=0; j<vowels.length; j++){
            if(str[i]===vowels[j]){
                vowelsCount++
            }
        }
    } return vowelsCount
}

console.log(findVowelsDSA('vivek'))

//shortcut

function findVowelsShortcut(str){
    str = str.split('').filter(ch=>"aeiouAEIOU".includes(ch)).length
    return str
}

console.log(findVowelsShortcut('vivekmeena'))