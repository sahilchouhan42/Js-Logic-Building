function numberPalindrome(num){
    num = num + ""
    let reverseNum = ''
    for(let i=num.length-1; i>=0; i--){
        reverseNum+=num[i]
    }
    if(reverseNum===num){
        return true
    } else{
        return false
    }
}

console.log(numberPalindrome(123))
console.log(numberPalindrome(121))