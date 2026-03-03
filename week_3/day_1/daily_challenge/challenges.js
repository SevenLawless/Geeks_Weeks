// 1st daily challenge 


const makeAllCaps = (arr) => {
    return new Promise((resolve, reject) => {
        const allStrings = arr.every(word => typeof word === "string")

        if(allStrings) {
            resolve(arr.map(word => word.toUpperCase()))
        } else {
            reject("array is not all strings.")
        }
    })
}

const sortWords = (arr) => {
    return new Promise((resolve, reject) => {
        if(arr.length > 4) {
            resolve(arr.sort())
        } else {
            reject("array is not bigger than 4")
        }
    })
}


makeAllCaps([1, "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
    .then(arr => sortWords(arr))
    .then(result => console.log(result))
    .catch(error => console.log(error))





// 2nd daily challenge 
const morse = `{
    "0": "-----", "1": ".----", "2": "..---",
    "3": "...--", "4": "....-", "5": ".....",
    "6": "-....", "7": "--...", "8": "---..",
    "9": "----.", "a": ".-",   "b": "-...",
    "c": "-.-.", "d": "-..",   "e": ".",
    "f": "..-.", "g": "--.",   "h": "....",
    "i": "..",   "j": ".---",  "k": "-.-",
    "l": ".-..", "m": "--",    "n": "-.",
    "o": "---",  "p": ".--.",  "q": "--.-",
    "r": ".-.",  "s": "...",   "t": "-",
    "u": "..-",  "v": "...-",  "w": ".--",
    "x": "-..-", "y": "-.--",  "z": "--.."
}`

const toJs = () => {
    return new Promise((resolve, reject) => {
        const morseObject = JSON.parse(morse)

        if(Object.keys(morseObject).length === 0) {
            reject("morse object is empty!")
        } else {
            resolve(morseObject)
        }
    })
}

const toMorse = (morseObj) => {
    return new Promise((resolve, reject) => {
        const word = prompt("gimme a word").toLowerCase()

        const letters = word.split("")

        const morseArray = letters.map(letter => morseObj[letter])

        if(morseArray.includes(undefined)) {
            reject("character doesn't exist in morse!")
        } else {
            resolve(morseArray)
        }
    })
}

const joinWords = (morseTranslation) => {
    const joined = morseTranslation.join("\n")
    document.querySelector("#result").innerText = joined
}

toJs()
    .then(morseObj => toMorse(morseObj))
    .then(morseTranslation => joinWords(morseTranslation))
    .catch(error => console.log(error))