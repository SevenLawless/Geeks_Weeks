// 1

'I am John Doe from Vancouver, Canada. Latitude(49.2827), Longitude(-123.1207)'


// 2


function displayStudentInfo(objUser){
    const {first, last} = objUser;
    return `Your full name is ${first} ${last}`;
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});
console.log(displayStudentInfo({first: 'Elie', last:'Schoppik'})); // printing it just in case

// 3

const users = { user1: 18273, user2: 92833, user3: 90315 };

const users2 = Object.entries(users);
console.log(users2);

const users3 = users2.map(([x, y]) => [x, y * 2]);
console.log(users3);


// 4

object



// 5

class Labrador extends Dog {
  constructor(name, size) {
    super(name);
    this.size = size;
  }
};



// 6

```
[2] === [2] // false
{} === {} // false 

```


console.log(object2.number); //4
console.log(object3.number); //4
console.log(object4.number); //5


class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mammal extends Animal {
    constructor(name, type, color) {
        super(name, type, color);
    }
    sound(soundParam) {
        console.log(`${soundParam}, I'm a ${this.type}, named ${this.name} and I'm ${this.color}`);
    };
}

const farmerCow = new Mammal ("Lily", "cow", "brown and white");

farmerCow.sound("Mooo");