//sum of numbers

function sumOfDigitsDSA(num){
    let str = num+""
    let totalResult = 0
    for(let i=0; i<str.length; i++){
        totalResult += Number(str[i])
    }
    return totalResult
}

console.log(sumOfDigitsDSA(1234))

//shortcut method

function sumOfDigitsShortcut(num){
    num = num.toString().split('').map(d=>Number(d)).reduce((a, b)=>a+b, 0)
    return num
}

console.log(sumOfDigitsShortcut(151))