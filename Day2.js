//find vowels

function findVowelsDSA(str){
    str = str.toLowerCase()
    let vowels = 'aeiou'
    let vowelCount = 0
    for(let i=0; i<str.length;i++){
        for(let j=0; j<vowels.length;j++){
            if(str[i]===vowels[j]){
                vowelCount++
            }
        }
    } return vowelCount
}

console.log(findVowelsDSA('sahil'))

//Another method

function findVowelsAnother(str){
    let vowelCount = 0
    let vowels = 'aeiouAEIOU'
    for(let i=0; i<str.length; i++){
        if(vowels.includes(str[i])){
            vowelCount++
        }
    } return vowelCount

}

console.log(findVowelsAnother('vivekmeena'))

//shortcutMethod

function findVowelsShortcut(str){
    str = str.split('').filter(ch=>"aeiouAEIOU".includes(ch)).length;
    return str

}

console.log(findVowelsShortcut('rohan'))