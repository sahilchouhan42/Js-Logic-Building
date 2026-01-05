function isAnagramDSA(str1, str2){
    if(str1.length!==str2.length) return false;

    const map = {};

    for(let i = 0; i<str1.length; i++){
        map[str1[i]]=(map[str1]||0) +1
    }

    for(let i = 0; i<str2.length; i++){
        if(!map[str2[i]]){
            return false
        }
        map[str2[i]]--
    }
    return true
}

console.log(isAnagramDSA("listen", "silent"))