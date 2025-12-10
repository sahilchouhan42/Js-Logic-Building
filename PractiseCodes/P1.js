
//DSA APProach
function reverStringDSA(str){
    let reverseStr = '';
    for(let i=str.length-1; i>=0; i--){
        reverseStr += str[i]
    }
    return reverseStr
}

console.log(reverStringDSA('sahil'))

//Shortcut method
function reverseStringShortcut(str){
    str= str.split('').reverse().join('');
    return str
}

console.log(reverseStringShortcut('meena'))