function firstNonRepeatingDSA(str){
    const map = {}
    for(let i=0; i<str.length; i++){
        map[str[i]]=(map[str[i]]||0)+1
    }

    for(let i=0; i<str.length; i++){
        if(map[str[i]]===1){
            return str[i]
        }
    }
    return null

}

console.log(firstNonRepeatingDSA('aabbccd'))
console.log(firstNonRepeatingDSA('aabbcc'))

//shortcut method

function firstNonRepeatingShortcut(str){
    return str.split('').find(ch=>str.indexOf(ch)===str.lastIndexOf(ch)||null)
}

console.log(firstNonRepeatingShortcut('aabbccdde'))
console.log(firstNonRepeatingShortcut('vivekmeena'))