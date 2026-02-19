// ------------------------------------ex1----------------------------------------------


```
#1.1 : a is 3
#1.2 : it throws an error since const cant be changed
#2 : a is gnna be 0 first and then its gnna get changed to 5 when funcTwo is called and then its gnna stay 5
#3 : wtf is window.a iv never heard that in my life, since u said it creates a global variable then a is gnna be "hello" when funcFive is called and yes a is available globally since a is global now
#4 : a is "test" since the first a is global and the 2nd is local and thats the one thats gnna be alerted since wer inside the function
#5 : first alert is a = 5, second alert is a = 2
```




// #1.1 : a is 3
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}


funcOne()

//#1.2 : it throws an error since const cant be changed
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

funcThree()
funcTwo()
funcThree()


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
// with const instead of let ?

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`);
}
alert(`outside of the if block ${a}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?


// ------------------------------------ex2----------------------------------------------
const winBattle = () => true;

let experiencePoints = winBattle() ? 10 : 1;

console.log(experiencePoints);

// ------------------------------------ex3----------------------------------------------

const isString = value => typeof value === "string";

// ------------------------------------ex4----------------------------------------------

const sum = (a, b) => a + b;

// ------------------------------------ex5----------------------------------------------


function kgToGrams(kg) {
    return kg * 1000;
}

const kgToGrams = function(kg) {
    return kg * 1000;
};


const kgToGrams = kg => kg * 1000;

// ------------------------------------ex6----------------------------------------------

(function(children, partner, location, job) {
    let sentence = `You will be a ${job} in ${location}, and married to ${partner} with ${children} kids.`;
    document.body.innerHTML = sentence;  // Directly to body
})(4, "Sarah", "NYC", "Developer");

// ------------------------------------ex7----------------------------------------------
(function(userName) {
    const navbar = document.getElementById('navbar');
    navbar.innerHTML = `
        <h2>Welcome, ${userName}!</h2>
        <img src="profile.jpg" alt="${userName}'s profile" style="width: 50px;">
    `;
})("John");  // Pass name directly


// ------------------------------------ex8----------------------------------------------

function makeJuice(size) {
    const ingredients = [];
    
    function addIngredients(ing1, ing2, ing3) {
        ingredients.push(ing1, ing2, ing3);
    }
    
    function displayJuice() {
        document.body.innerHTML = `The client wants a ${size} juice, containing ${ingredients.join(', ')}.`;
    }
    
    addIngredients("apple", "banana", "orange");
    addIngredients("mango", "strawberry", "kiwi");
    displayJuice();
}

makeJuice("medium");
