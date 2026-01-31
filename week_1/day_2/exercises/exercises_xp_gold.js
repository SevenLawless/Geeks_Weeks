//----------------------ex1----------------------

function is_Blank(str) {
    return str === "";
    
}

console.log(is_Blank("hh"));
console.log(is_Blank(""));


//----------------------ex2----------------------

function Abbrev_name(str) {
    let splitstr = str.split(" ")
    return (`${splitstr[0]} ${splitstr[1][0].toUpperCase()}.`);
}

console.log(Abbrev_name("khuna mohmad"));

//----------------------ex3----------------------


function switchh(str) {
    let newvar = '';
    for (let i=0; i<str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            newvar += str[i].toLowerCase()
        } else if (str[i] === str[i].toLowerCase()) {
            newvar += str[i].toUpperCase()
        }
        
    }
    return newvar;
}

console.log(switchh("The Quick Brown Fox"));


//----------------------ex4----------------------


function omniwhatever(ar, chosenone) {
    let shayt = false
    let omni;
    for (let i = 0; i < ar.length; i++) {
        omni = false;

        for (let y = 0; y < ar[i].length; y++) {
            if (chosenone === ar[i][y]) {omni = true;}

        }

        if (!omni) {shayt = true;}
    }
    if (shayt) {return false;}
    if (!shayt) {return true;}
}

console.log(omniwhatever([[1, 1], [1, 3], [5, 1], [6, 1]], 1))
console.log(omniwhatever([[1, 1], [1, 3], [5, 1], [6, 1]], 6))

// HOLYYY SHIT
function isOmnipresent(arr, value) {
    return arr.every(subarray => subarray.includes(value));
}

//----------------------ex5----------------------



let tables = document.body.firstElementChild.firstElementChild;

let alltds = tables.querySelectorAll("td");

for (let i = 0; i < alltds.length; i++) {
    let element = alltds[i].textContent;
    const parts = element.split(":")
    if (parts[0] === parts[1]) {
        alltds[i].style.backgroundColor = "red";
    }
}