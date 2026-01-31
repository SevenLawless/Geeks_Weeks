//----------------------ex1----------------------


let rando = Math.floor(Math.random() * 100) + 1;

for (let i=1; i<=rando; i++) {
    console.log(i);
}
for (let i = 0; i <= rando; i += 2) {
    console.log(i);
}


//----------------------ex2----------------------

function awdi(str) {
    let r;
    let t = "h";
    let tempo = '';
    let tempo2 = '';
    for (let i in str) {
        if (i % 2 == 0) {
            tempo += str[i].toUpperCase();
        } else {
            tempo += str[i];
        }
        
    }
    r = tempo;

    for (let i in str) {
        if (i % 2 !== 0) {
            tempo2 += str[i].toUpperCase();
        } else {
            tempo2 += str[i];
        }
        
    }
    t = tempo2;


    return [r, t];
}

console.log(awdi("stringgg"));





//----------------------ex3----------------------

function reverso(str) {
    let nicestr = str.toLowerCase().split('').reverse().join('');

    if (nicestr === str.toLowerCase()) {
        console.log("Nice, whatever you just entered is palindrome.")
    } else {
        console.log("Nope")
    }   
}

reverso("Madam");



//----------------------ex4----------------------



function biggestNumberInArray(arrayNumber) {
    let biggest = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        if (arrayNumber[i] > biggest) {
            biggest = arrayNumber[i];
        }
    }
    return biggest;
}


console.log(biggestNumberInArray([-1, 0, 3, 100, 99, 2, 99]));
console.log(biggestNumberInArray(['a', 3, 4, 2]));
console.log(biggestNumberInArray([]));





//----------------------ex5----------------------




function unik(ar) {
    let newones = [];
    for (let i in ar) {
        if (!newones.includes(ar[i])) {
            newones.push(ar[i]);
        }
    }
    
    return newones
}

console.log(unik([1,2,3,3,3,3,4,5]));




//----------------------ex6----------------------


function createCalendar(year, month) {
    let body = document.body;
    
    let table = document.createElement("table");
    
    let thead = document.createElement("thead");
    let headerRow = document.createElement("tr");
    let weekdays = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
    
    for (let day of weekdays) {
        let th = document.createElement("th");
        th.textContent = day;
        headerRow.appendChild(th);
    }
    thead.appendChild(headerRow);
    table.appendChild(thead);
    
    let tbody = document.createElement("tbody");
    
    let firstDay = new Date(year, month - 1, 1).getDay();
    if (firstDay === 0) firstDay = 7;
    
    let daysInMonth = new Date(year, month, 0).getDate();
    
    let currentDay = 1;
    for (let week = 0; week < 6; week++) {
        let row = document.createElement("tr");
        
        for (let dayOfWeek = 1; dayOfWeek <= 7; dayOfWeek++) {
            let td = document.createElement("td");
            
            if (week === 0 && dayOfWeek < firstDay) {
                td.textContent = "";
            }
            else if (currentDay <= daysInMonth) {
                td.textContent = currentDay;
                currentDay++;
            }
            else {
                td.textContent = "";
            }
            
            row.appendChild(td);
        }
        
        tbody.appendChild(row);
        
        if (currentDay > daysInMonth) break;
    }
    
    table.appendChild(tbody);
    body.appendChild(table);
}


createCalendar(2012, 9);