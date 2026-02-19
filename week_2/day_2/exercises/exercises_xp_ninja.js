// ----------------------------ex1----------------------------

const data = [
  { name: 'Butters', age: 3, type: 'dog' },
  { name: 'Cuty', age: 5, type: 'rabbit' },
  { name: 'Lizzy', age: 6, type: 'dog' },
  { name: 'Red', age: 1, type: 'cat' },
  { name: 'Joey', age: 3, type: 'dog' },
  { name: 'Rex', age: 10, type: 'dog' },
];


// Rule: 1 dog year = 7 human years




const totalHumanYears = data.reduce((total, animal) => {
  if (animal.type === 'dog') {
    return total + (animal.age * 7);
  }
  return total;  // Don't add anything for non-dogs
}, 0);
console.log(totalHumanYears);

// ----------------------------ex2----------------------------

const userEmail3 = ' cannotfillemailformcorrectly@gmail.com ';
console.log(userEmail3.trim());




// ----------------------------ex3----------------------------
const users = [
  { firstName: 'Bradley', lastName: 'Bouley', role: 'Full Stack Resident' },
  { firstName: 'Chloe', lastName: 'Alnaji', role: 'Full Stack Resident' },
  { firstName: 'Jonathan', lastName: 'Baughn', role: 'Enterprise Instructor' },
  { firstName: 'Michael', lastName: 'Herman', role: 'Lead Instructor' },
  { firstName: 'Robert', lastName: 'Hajek', role: 'Full Stack Resident' },
  { firstName: 'Wes', lastName: 'Reid', role: 'Instructor'},
  { firstName: 'Zach', lastName: 'Klabunde', role: 'Instructor'}
];

const result = users.reduce((acc, user) => {
    const fullName = `${user.firstName} ${user.lastName}`;
    acc[fullName] = user.role;
    return acc;
}, {});

console.log(result);




// ----------------------------ex4----------------------------



const letters = ['x', 'y', 'z', 'z'];

const result = {}
for (let letter of letters) {
    if (result[letter]) {
        result[letter]++;
    }else{
        result[letter] = 1;
    }
}

const result2 = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});


console.log(result2);