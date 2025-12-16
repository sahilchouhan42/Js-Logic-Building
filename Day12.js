//find largest word in sentence

function longestWordDSA(sentence){
    let words = sentence.split(' ');
    // console.log(words)
    // console.log(words.length)
    let longestWord = '';
    for(let i=0; i<words.length; i++){
        if(words[i].length>longestWord.length){
            longestWord = words[i]
        }
    } return longestWord
}

console.log(longestWordDSA("I love js programming"))

//shortcut method

function longestWordShortcut(sentence){
    return sentence.split(" ").reduce((longest, current)=>current.length>longest.length?current:longest, "")
}

console.log(longestWordShortcut('where is your car'))