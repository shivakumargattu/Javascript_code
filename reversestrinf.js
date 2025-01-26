// write code return the reverse of string

let Str="haii how are you"

let reveserStr= Str.split("").reverse().join("")
console.log(reveserStr)


// second method:

let rev=""

for (let i=Str.length; i>=0; i--){

 rev+=Str[i]

}
console.log(rev)
