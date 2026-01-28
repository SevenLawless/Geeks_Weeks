// ===== Exercise 1
const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
people.splice(2, 1, "Jason");
people.push("zakaria");
console.log(people.indexOf("Mary"));
console.log(people.slice(1, 3));
console.log(people.indexOf("Foo"));
let last = people[people.length - 1];

for (let i = 0; i < people.length; i++) {
    console.log(people[i]);
}

for (let person of people) {
    if (person !== "Devon") {
        console.log(person);
    } else {
        console.log(person);
        break;
    }
}

// ===== Exercise 2
 // i know i couldv created an array of suffixes but i wanted to try it this way
const colors = ["red", "black", "orange", "blue", "pink"];

 for (let i = 0; i < colors.length; i++) {
    let inx;
    if (i === 0) inx = "st";
    else if (i === 1) inx = "nd";
    else if (i === 2) inx = "rd";
    else inx = "th";
    
    console.log(`my ${i + 1}${inx} choice is ${colors[i]}`);
}

// ===== Exercise 3
do{
    let num = parseInt(prompt("Please enter a number:"));
}while(typeof num === 'number' && num < 10);

// ===== Exercise 4
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building.numberOfFloors);
console.log(building.numberOfAptByFloor.firstFloor);
console.log(building.numberOfAptByFloor.thirdFloor);
console.log(building.nameOfTenants[1]);
console.log(building.numberOfRoomsAndRent.dan[0]);


dans_rent = building.numberOfRoomsAndRent.dan[1];
sarahs_n_davids_rent = building.numberOfRoomsAndRent.sarah[1] + building.numberOfRoomsAndRent.david[1];

if (sarahs_n_davids_rent > dans_rent) {
    building.numberOfRoomsAndRent.dan[1] = 1200;
}

// ===== Exercise 5
const family = {
    father: "Hmed",
    mother: "Rabia",
    son: "louay",
    daughter: "nadya"
};

for (let person in family) {
    console.log(`${person} : ${family[person]}`);
}

// or separate loops cuz u asked 
for (let key in family) {
    console.log(key);
}

for (let key in family) {
    console.log(family[key]);
}

// ===== Exercise 6
const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

let sentence = "";
for (let word in details) {
    sentence = sentence + word + " " + details[word] + " ";
}
console.log(sentence.trim());

// ===== Exercise 7
const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

names.sort();
let secretname = "";
for (let name of names) {
    secretname += name.charAt(0).toUpperCase();
}
console.log(secretname);