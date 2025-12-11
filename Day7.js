function countCharacterDSA(str){
    const map = {};
    for(let i=0; i<str.length; i++){
        const ch = str[i]; 
        if(map[ch]){
            map[ch]++
        } else{
            map[ch]=1
        }
    }
    return map;
}

console.log(countCharacterDSA('hello'))

//Shortcut method

function countCharacterShortcut(str){
    return str.split('').reduce((acc, ch)=>{
        acc[ch]=(acc[ch]||0) + 1;
        return acc
    }, {})
}

console.log(countCharacterShortcut('banana'))