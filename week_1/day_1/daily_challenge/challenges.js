// ====== Daily Challenge Not Bad

let sentence = "not that bad brojola";
//let sentence = "very bad, not very good";

let wordNot = sentence.indexOf("not");
let wordBad = sentence.indexOf("bad");


if (wordBad > wordNot && wordBad !== -1 && wordNot !== -1) {
    let newSentence = sentence.slice(0, wordNot) + "good" + sentence.slice(wordBad + 3);
    console.log(`the result is : '${newSentence}'`);
} else {
    console.log(`normal sentence is : '${sentence}'`);
}




// ====== Daily Challenge Stars

let stars = "";
for (let i = 0; i < 6; i++) {
    stars += "* ";
    console.log(`${stars}\n`);
}



for (let i = 0; i < 6; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}


// ofc imma do all the challenges by myself hh