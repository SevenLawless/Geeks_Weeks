// ---------------------------------day 1------------------------------
// ---------------------------------xp------------------------------
//1
// const compareToTen = (num) => {
//     return new Promise((resolve, reject) => {
//         if (num <= 10){
//             resolve("num is right");
//         }else {
//             reject("num is not right")
//         }
//     })
// }

// compareToTen(8)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// compareToTen(15)
//     .then(result => console.log(result))
//     .catch(error => console.log(error))

// 2
// const awdi = new Promise((resolve, reject) => {
//     setTimeout(()=> {
//         resolve("im resolved");
//     }, 4000)
// })

// awdi.then(result => console.log(result))

// 3 
// Promise.resolve(3).then(result => console.log(result));
// Promise.reject("Boo!").catch(error => console.log(error));






// ---------------------------------xp gold------------------------------

// 1
// const promise1 = Promise.resolve(3)
// const promise2 = 42
// const promise3 = new Promise((resolve, reject) => {
//     setTimeout(resolve, 3000, 'foo')  
// })

// Promise.all([promise1, promise2, promise3])
//     .then(results => console.log(results))



// 2

// output is : [2, 4, 6]

// ---------------------------------daily challenge------------------------------
const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`


const toJs = () => {
    return new Promise((resolve, reject) => {
        const morseObject = JSON.parse(morse)

        if(Object.keys(morseObj).length === 0) {
            reject("morse object is empty!")
        } else {
            resolve(morseObj)
        }
    })
}

const toMorse = (morseObj) => {
    return new Promise((resolve, reject) => {
        const word = prompt("gimme a word")
        const letters = word.split("")
        const morsed = letters.map(letter => morseObj[letter])

        if(morsed.includes(undefined)) {
            reject("character doesn't exist!")
        } else {
            resolve(morsed)
        }
    })
}

// ---------------------------------xp ninja------------------------------

