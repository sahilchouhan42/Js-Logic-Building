//Check string is palidrom or not

//Method 1
function isPalindromeDSA(str){
    let left = 0;
    let right = str.length-1;

    while(left<right){
        if(str[left]!==str[right]){
            return false
        }
        left ++;
        right--
    } 
    return true
}

console.log(isPalindromeDSA('level'))
console.log(isPalindromeDSA('hello'))

//Method 2 shortcut
 function isPalindromeShortcut(str){
    return str === str.split('').reverse().join("")
 }

 console.log(isPalindromeShortcut('racecar'))

 //Method 3

 function isPalindromeLoop(str){
    let reverseStr = ''
    for(let i=str.length-1; i>=0; i--){
        reverseStr+=str[i];
    }
    if(reverseStr===str){
        return true
    } else{
        return false
    }
    
 }

 console.log(isPalindromeLoop('hello'))
 console.log(isPalindromeLoop('level'))