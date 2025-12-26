function countCharacterDSA(str){
    let map = {}
    for(let i=0; i<str.length; i++){
        let ch = str[i]
        if(map[ch]){
            map[ch]++
        } else{
            map[ch] = 1
        }
    } return map
}

console.log(countCharacterDSA("hello"))

//shortcut method

function countCharacterShortcut(str){
    return str.split('').reduce((acc, ch)=>{
        acc[ch]=(acc[ch]||0)+1
        return acc
    }, {})
}

console.log(countCharacterShortcut("banana"))