// ===== Exercise 1

let numbers = [123, 8409, 100053, 333333333, 7]
 for (let number of numbers) {
    if (number % 3 === 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}

// ===== Exercise 2

let guestList = {
  randy: "Germany",
  karla: "France",
  wendy: "Japan",
  norman: "England",
  sam: "Argentina"
}

let stuname = prompt("Please enter your name:").toLowerCase();


if (stuname in guestList) {
    console.log(`Hi! I'm ${stuname}, and I'm from ${guestList[stuname]}.`);
} else {
    console.log("Hi! I'm a guest.");
}

// ===== Exercise 3

let age = [20,5,12,43,98,55];
let sum = 0;
let highest = age[0];

for (let i=0; i<age.length; i++) {
    sum += age[i];
    if (age[i] > highest) {
        highest = age[i];
    }
}
console.log(`The sum is: ${sum}`);
console.log(`The highest is: ${highest}`);
