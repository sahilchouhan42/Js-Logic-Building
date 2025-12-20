//reverse string

function reverseStringDSA(str){
    let reverseStr = ''
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i]
    }
    return reverseStr
}

console.log(reverseStringDSA("hello"))

//shortcut

function reverseStringShortcut(str){
    str = str.split('').reverse().join("")
    return str
}

console.log(reverseStringShortcut("sahil"))