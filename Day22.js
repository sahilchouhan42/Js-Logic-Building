//reverse word dsa

function reverseWordsDSA(sentence){
    let n = sentence.length;
    let result = "";
    let wordStart = 0;

    for(let i = 0; i<=n; i++){
        //space ya end of string
        if(i===n || sentence[i]===" "){
            //reverse current word
            for(let j=i-1; j>=wordStart; j--){
                result+=sentence[j]
            }

            // add space if not
            if(i !== n){
                result+= " "
            }

            wordStart  = i+1
        }
    }
    return result
}

console.log(reverseWordsDSA("hello world"))

//shortcut method
 function reverseWordsShortcut(sentence){
        return sentence
        .split(" ").map(word=>word.split("").reverse().join("")).join(" ")
 }

 console.log(reverseWordsShortcut('Hello sahil Chouhan'))