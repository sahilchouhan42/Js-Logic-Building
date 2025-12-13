// function isAnagramDSA(str1, str2){
//     if(str1.length!==str2.length) return false;

//     const map = {}

//     for(let i=0; i<str1.length; i++){
//         map[str1[i]]=(map[str1[i]]||0)+1;
//     }

//     for(let i=0; i<str2.length; i++){
//         if(!map[str2[i]]){
//                 return false
//         }
//         map[str2[i]]--;
//     }
// }

// console.log(isAnagramDSA('listen', 'silent'))
// console.log(isAnagramDSA('hello', 'world'))

// //shortcut method

// function isAnagramShortcut(str1, str2){
//     return str1.split('').reverse().join('')===str2.split('').reverse().join('')
// }

// console.log(isAnagramShortcut('listen', 'silent'))
// console.log(isAnagramShortcut('rat', 'car'))



//



function isAnagramDSA(str1, str2) {
  if (str1.length !== str2.length) return false;

  const map = {};

  for (let i = 0; i < str1.length; i++) {
    map[str1[i]] = (map[str1[i]] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    if (!map[str2[i]]) {
      return false;
    }
    map[str2[i]]--;
  }

  return true;
}

// Test
console.log(isAnagramDSA("listen", "silent")); // true
console.log(isAnagramDSA("hello", "world"));   // false
