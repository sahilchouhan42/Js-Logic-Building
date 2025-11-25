function reverseString(str){
    let reverseStr = '';
    for(let i=str.length-1; i>=0; i--){
        if(typeof str==='string'){
            reverseStr += str[i]
        }
    } return reverseStr
}

console.log(reverseString("sahil"))
console.log(reverseString("vivek"))
