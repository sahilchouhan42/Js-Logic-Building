//Task: Reverse string

//DSA Style:
function reverseStringDSA(str){
    let result = '';
    for(i=str.length-1; i>=0; i--){
        result += str[i]
    }
    return result
}

console.log(reverseStringDSA('sahil'))

//Inbuit-shortcut-Method

function reverseStringShortcut(str){
    return str.split('').reverse().join("")
}

console.log(reverseStringShortcut("vivek"))