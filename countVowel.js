let word= "Hellow word";
let vlw=["a","e","i","o","u"];
let cont=0;

for (let isVowel of word.toLowerCase()){

    if (vlw.includes(isVowel)){
     cont+=1
    }
}
console.log(cont)

