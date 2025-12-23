//palindrome string

function isPalindromeDSA(str){
    let reverseStr = ''
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i]
    }
    if(reverseStr===str) {
        return true
    } else{
        return false
    }
}

console.log(isPalindromeDSA("sahil"))

//shortcut

function isPalindromeShortcut(str){
    return str===str.split('').reverse().join('')
}

console.log(isPalindromeShortcut('level'))