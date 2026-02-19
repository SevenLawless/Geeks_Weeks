//------------ex1-----------------


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach(function(color, index) {
    if(color==="Violet"){
        console.log(`${index+1}# is ${color} Yesssss this is the one we want`)
    }else{
        console.log(`${index+1}# is ${color} Nope`);
    }
    
})

// if u want me to use the some method :
colors.some(color => color === "Violet") ? console.log("Yep") : console.log("Nope");

//------------ex2-----------------


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const suffix = ["th","st","nd","rd"];

colors.forEach((color, index) => {
  const position = index + 1;
  const suf = index < 3 ? suffix[index + 1] : suffix[0];
  console.log(`${position}${suf} choice is ${color}.`);
});


//------------ex3-----------------


['bread', "carrot", "potato", 'chicken', "apple", "orange"]

["U","S","A"]

[undefined, undefined]




//------------ex4-----------------

const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];


const salamStudents = users.map(user => `Hello ${user.firstName}`);
console.log(salamStudents);


const fullstak = users.filter(user => user.role === 'Full Stack Resident').map(user => user.lastName);
console.log(fullstak)



//------------ex5-----------------

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
console.log(epic.join(" "));



// if u want the reduce method :
const sentence = epic.reduce((acc, word) => acc + " " + word);


//------------ex6-----------------



const students = [
  {name: "Ray", course: "Computer Science", isPassed: true}, 
  {name: "Liam", course: "Computer Science", isPassed: false}, 
  {name: "Jenner", course: "Information Technology", isPassed: true}, 
  {name: "Marco", course: "Robotics", isPassed: true}, 
  {name: "Kimberly", course: "Artificial Intelligence", isPassed: false}, 
  {name: "Jamie", course: "Big Data", isPassed: false}
];



const passed = students.filter(student => student.isPassed);
console.log(passed);

passed.forEach(function(e) {
    console.log(`Good job ${e.name}, you passed the course in ${e.course}`);
});

//combined one :
students.filter(student => student.isPassed).forEach(function(e) {
    console.log(`Good job ${e.name}, you passed the course in ${e.course}`);
});