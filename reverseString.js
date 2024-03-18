function reverseString(String){
    let reversedString = ""
    for(let size = String.length - 1; size >= 0; size--){
        reversedString += String[size]
    }
    return reversedString
}

const string1 = "Bom dia!"
const string2 = "Hello World!"


console.log(reverseString(string1))
console.log(reverseString(string2))