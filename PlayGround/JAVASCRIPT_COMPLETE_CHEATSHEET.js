// ═══════════════════════════════════════════════════════════════════════════════
// 📘 COMPLETE JAVASCRIPT CHEATSHEET - BEST PRACTICES ONLY
// ═══════════════════════════════════════════════════════════════════════════════
// Everything you've learned from scratch to Node.js Web Servers & CRUD APIs
// Last Updated: Day #3 - Node.js Web Server, Express, CRUD API, Fetch API
// ═══════════════════════════════════════════════════════════════════════════════
// 200 → ✅ OK — Everything worked!
// 400 → ❌ Bad Request — You sent something wrong
// 401 → 🔒 Unauthorized — You need to log in
// 403 → 🚫 Forbidden — You're logged in but no permission
// 404 → 🔍 Not Found — That page doesn't exist
// 500 → 💥 Server Error — The server broke

// ═══════════════════════════════════════════════════════════════════════════════
// 1. VARIABLES & DATA TYPES
// ═══════════════════════════════════════════════════════════════════════════════

// VARIABLES - Use const by default, let when you need to reassign
const name = "John";           // ✅ Cannot reassign
let age = 25;                  // ✅ Can reassign
age = 26;                      // ✅ Works

// ❌ NEVER use var (old, has scoping issues)

// DATA TYPES
const string = "Hello";           // String
const number = 42;                // Number
const boolean = true;             // Boolean (true/false)
const nothing = null;             // Null (intentional empty)
const notDefined = undefined;     // Undefined (not assigned)
const arr = [1, 2, 3];           // Array
const obj = { key: "value" };    // Object


// ═══════════════════════════════════════════════════════════════════════════════
// 2. OPERATORS
// ═══════════════════════════════════════════════════════════════════════════════

// ARITHMETIC
const sum = 5 + 3;           // 8
const diff = 10 - 4;         // 6
const product = 6 * 7;       // 42
const quotient = 20 / 4;     // 5
const remainder = 10 % 3;    // 1 (modulo)
const power = 2 ** 3;        // 8 (exponent)

// ASSIGNMENT
let x = 10;
x += 5;   // x = x + 5 → 15
x -= 3;   // x = x - 3 → 12
x *= 2;   // x = x * 2 → 24
x /= 4;   // x = x / 4 → 6

// COMPARISON - ALWAYS USE === AND !== (strict equality)
5 === 5           // true
5 === "5"         // false (different types)
5 !== 3           // true
5 > 3             // true
5 >= 5            // true
5 < 10            // true

// ❌ NEVER use == or != (loose equality, has weird behavior)

// LOGICAL
true && true      // true (AND - both must be true)
true || false     // true (OR - at least one true)
!true             // false (NOT - opposite)

// TERNARY (shorthand if/else)
const result = age >= 18 ? "adult" : "minor";


// ═══════════════════════════════════════════════════════════════════════════════
// 3. CONDITIONALS
// ═══════════════════════════════════════════════════════════════════════════════

// IF/ELSE
if (age >= 18) {
    console.log("Adult");
} else if (age >= 13) {
    console.log("Teen");
} else {
    console.log("Child");
}

// SWITCH
const day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of week");
        break;
    case "Friday":
        console.log("Almost weekend");
        break;
    default:
        console.log("Regular day");
}


// ═══════════════════════════════════════════════════════════════════════════════
// 4. LOOPS
// ═══════════════════════════════════════════════════════════════════════════════

// FOR LOOP - Traditional
for (let i = 0; i < 5; i++) {
    console.log(i);  // 0, 1, 2, 3, 4
}

// FOR...OF - Loop through array VALUES (BEST for arrays)
const fruits = ["apple", "banana", "orange"];
for (const fruit of fruits) {
    console.log(fruit);  // apple, banana, orange
}

// FOR...IN - Loop through object KEYS
const person = { name: "John", age: 30 };
for (const key in person) {
    console.log(key, person[key]);  // name John, age 30
}

// WHILE LOOP
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}


// ═══════════════════════════════════════════════════════════════════════════════
// 5. FUNCTIONS
// ═══════════════════════════════════════════════════════════════════════════════

// FUNCTION DECLARATION (traditional)
function greet(name) {
    return `Hello, ${name}!`;
}

// ARROW FUNCTION (modern, preferred)
const greet = (name) => {
    return `Hello, ${name}!`;
};

// ARROW FUNCTION - Shorthand (one-liner)
const greet = (name) => `Hello, ${name}!`;

// ARROW FUNCTION - No parameters
const sayHi = () => "Hi!";

// ARROW FUNCTION - One parameter (parentheses optional)
const double = x => x * 2;

// DEFAULT PARAMETERS
const greet = (name = "Guest") => `Hello, ${name}!`;

// REST PARAMETERS (collect all arguments into array)
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);
sum(1, 2, 3, 4);  // 10

// CALLBACK FUNCTIONS (function passed as argument)
const processUser = (name, callback) => {
    callback(name);
};
processUser("John", (name) => console.log(name));


// ═══════════════════════════════════════════════════════════════════════════════
// 6. ARRAYS & ARRAY METHODS (⭐ MOST IMPORTANT!)
// ═══════════════════════════════════════════════════════════════════════════════

const numbers = [1, 2, 3, 4, 5];

// ACCESSING
numbers[0];           // 1 (first element)
numbers.length;       // 5
numbers[numbers.length - 1];  // 5 (last element)

// ADDING/REMOVING
numbers.push(6);      // Add to end → [1,2,3,4,5,6]
numbers.pop();        // Remove from end → [1,2,3,4,5]
numbers.unshift(0);   // Add to start → [0,1,2,3,4,5]
numbers.shift();      // Remove from start → [1,2,3,4,5]

// SLICE (copy part of array, doesn't modify original)
numbers.slice(1, 3);  // [2, 3] (from index 1 to 3, not including 3)

// SPLICE (remove/add elements, modifies original)
numbers.splice(2, 1);  // Remove 1 element at index 2

// ═══ ESSENTIAL ARRAY METHODS ═══

// forEach - Loop through array (no return value)
numbers.forEach(num => {
    console.log(num);
});

// map - Transform each element (returns NEW array)
const doubled = numbers.map(num => num * 2);
// [1,2,3] → [2,4,6]

// filter - Keep elements that pass test (returns NEW array)
const evens = numbers.filter(num => num % 2 === 0);
// [1,2,3,4,5] → [2,4]

// find - Get FIRST element that passes test
const found = numbers.find(num => num > 3);
// Returns: 4 (first number > 3)

// some - Check if AT LEAST ONE passes test (returns true/false)
const hasEven = numbers.some(num => num % 2 === 0);
// true (at least one even number exists)

// every - Check if ALL pass test (returns true/false)
const allPositive = numbers.every(num => num > 0);
// true (all numbers are positive)

// reduce - Combine all elements into single value
const sum = numbers.reduce((total, num) => total + num, 0);
// [1,2,3,4,5] → 15

// REDUCE - Counting occurrences (IMPORTANT PATTERN!)
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;  // ⚠️ ALWAYS return acc!
}, {});
// Result: { apple: 3, banana: 2, orange: 1 }

// sort - Sort array (modifies original!)
const nums = [3, 1, 4, 1, 5];
nums.sort((a, b) => a - b);  // Ascending: [1,1,3,4,5]
nums.sort((a, b) => b - a);  // Descending: [5,4,3,1,1]

// includes - Check if element exists
numbers.includes(3);  // true

// indexOf - Find index of element
numbers.indexOf(3);  // 2 (index of element 3)

// join - Convert array to string
fruits.join(", ");  // "apple, banana, orange"


// ═══════════════════════════════════════════════════════════════════════════════
// 7. OBJECTS
// ═══════════════════════════════════════════════════════════════════════════════

// CREATING OBJECTS
const user = {
    name: "John",
    age: 30,
    email: "john@example.com",
    isActive: true
};

// ACCESSING PROPERTIES
user.name;           // "John" (dot notation)
user["email"];       // "john@example.com" (bracket notation)

// ADDING/UPDATING PROPERTIES
user.city = "NYC";       // Add new property
user.age = 31;           // Update existing

// DELETING PROPERTIES
delete user.isActive;

// CHECKING IF PROPERTY EXISTS
"name" in user;          // true
user.hasOwnProperty("name");  // true

// OBJECT METHODS (functions inside objects)
const person = {
    name: "Sarah",
    greet: function() {
        console.log(`Hello, I'm ${this.name}`);
    },
    // Shorthand (modern)
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

person.greet();  // "Hello, I'm Sarah"

// ═══ OBJECT METHODS (Built-in) ═══

const car = { make: "Tesla", model: "Model 3", year: 2024 };

// Object.keys() - Get array of keys
Object.keys(car);  // ["make", "model", "year"]

// Object.values() - Get array of values
Object.values(car);  // ["Tesla", "Model 3", 2024]

// Object.entries() - Get array of [key, value] pairs
Object.entries(car);  // [["make", "Tesla"], ["model", "Model 3"], ["year", 2024]]

// Object.fromEntries() - Convert array of pairs to object
const pairs = [["name", "John"], ["age", 30]];
Object.fromEntries(pairs);  // { name: "John", age: 30 }


// ═══════════════════════════════════════════════════════════════════════════════
// 8. DESTRUCTURING (⭐ MODERN JS!)
// ═══════════════════════════════════════════════════════════════════════════════

// ARRAY DESTRUCTURING
const colors = ["red", "green", "blue"];
const [first, second, third] = colors;
// first = "red", second = "green", third = "blue"

// Skip elements
const [firstColor, , thirdColor] = colors;
// firstColor = "red", thirdColor = "blue"

// OBJECT DESTRUCTURING
const user = { name: "John", age: 30, city: "NYC" };
const { name, age } = user;
// name = "John", age = 30

// Rename variables
const { name: userName, age: userAge } = user;
// userName = "John", userAge = 30

// Default values
const { name, country = "USA" } = user;
// country = "USA" (user doesn't have country property)

// NESTED DESTRUCTURING
const student = {
    name: "John",
    scores: { math: 90, english: 85 }
};
const { name, scores: { math, english } } = student;
// name = "John", math = 90, english = 85

// DESTRUCTURING IN FUNCTION PARAMETERS (BEST PRACTICE!)
const printUser = ({ name, age }) => {
    console.log(`${name} is ${age} years old`);
};
printUser({ name: "John", age: 30 });


// ═══════════════════════════════════════════════════════════════════════════════
// 9. SPREAD OPERATOR (...)
// ═══════════════════════════════════════════════════════════════════════════════

// ARRAY SPREADING
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];  // [1,2,3,4,5,6]

// COPYING ARRAYS (prevents mutation)
const original = [1, 2, 3];
const copy = [...original];  // [1,2,3] (separate array)

// OBJECT SPREADING
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };
const merged = { ...obj1, ...obj2 };  // { a:1, b:2, c:3, d:4 }

// COPYING OBJECTS (shallow copy)
const person = { name: "John", age: 30 };
const personCopy = { ...person };

// UPDATING OBJECTS (immutable way)
const updatedPerson = { ...person, age: 31 };  // { name:"John", age:31 }


// ═══════════════════════════════════════════════════════════════════════════════
// 10. CLASSES & OOP
// ═══════════════════════════════════════════════════════════════════════════════

// BASIC CLASS
class Person {
    // Constructor - runs when creating new instance
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    // Method
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    // Method with parameters
    haveBirthday() {
        this.age++;
    }
}

// Creating instances
const john = new Person("John", 30);
john.greet();  // "Hello, I'm John"
john.haveBirthday();  // age becomes 31

// INHERITANCE (extends)
class Employee extends Person {
    constructor(name, age, jobTitle) {
        super(name, age);  // ⚠️ Call parent constructor FIRST!
        this.jobTitle = jobTitle;
    }
    
    work() {
        return `${this.name} is working as ${this.jobTitle}`;
    }
}

const emp = new Employee("Sarah", 28, "Developer");
emp.greet();  // Inherited from Person
emp.work();   // Employee's own method

// GETTERS AND SETTERS
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    // Getter (access like property)
    get area() {
        return this.width * this.height;
    }
    
    // Setter (set like property)
    set area(value) {
        this.width = Math.sqrt(value);
        this.height = Math.sqrt(value);
    }
}

const rect = new Rectangle(10, 5);
rect.area;  // 50 (use like property, no parentheses!)
rect.area = 100;  // Set new area


// ═══════════════════════════════════════════════════════════════════════════════
// 11. JSON (JavaScript Object Notation)
// ═══════════════════════════════════════════════════════════════════════════════

// OBJECT → JSON STRING
const user = { name: "John", age: 30 };
const jsonString = JSON.stringify(user);
// '{"name":"John","age":30}'

// JSON STRING → OBJECT
const jsonData = '{"name":"John","age":30}';
const obj = JSON.parse(jsonData);
// { name: "John", age: 30 }

// PRETTY PRINT JSON (with spacing)
JSON.stringify(user, null, 2);
/* 
{
  "name": "John",
  "age": 30
}
*/


// ═══════════════════════════════════════════════════════════════════════════════
// 12. DOM MANIPULATION (⭐ CRITICAL FOR WEB DEVELOPMENT!)
// ═══════════════════════════════════════════════════════════════════════════════

// ═══ SELECTING ELEMENTS ═══

// By ID (returns one element)
const element = document.getElementById("myId");

// By CSS selector (returns FIRST match) - ⭐ MOST FLEXIBLE!
const element = document.querySelector(".myClass");
const element = document.querySelector("#myId");
const element = document.querySelector("div > p");

// By CSS selector (returns ALL matches)
const elements = document.querySelectorAll(".myClass");

// By class name (returns HTMLCollection)
const elements = document.getElementsByClassName("myClass");

// By tag name (returns HTMLCollection)
const elements = document.getElementsByTagName("p");

// ⭐ BEST PRACTICE: Use querySelector and querySelectorAll for everything!


// ═══ CHANGING CONTENT ═══

// textContent - Plain text (SAFE!)
element.textContent = "New text";

// innerHTML - HTML content (⚠️ Be careful with user input!)
element.innerHTML = "<strong>Bold text</strong>";


// ═══ CHANGING STYLES ═══

// Inline styles (CSS properties become camelCase!)
element.style.color = "red";
element.style.backgroundColor = "blue";  // background-color → backgroundColor
element.style.fontSize = "20px";         // font-size → fontSize

// CSS Classes (BETTER PRACTICE!)
element.classList.add("highlight");
element.classList.remove("highlight");
element.classList.toggle("active");      // Add if not present, remove if present
element.classList.contains("active");    // Check if has class (true/false)


// ═══ CREATING & ADDING ELEMENTS ═══

// 1. Create element
const newDiv = document.createElement("div");

// 2. Add content
newDiv.textContent = "Hello";

// 3. Add styles/classes
newDiv.classList.add("box");
newDiv.id = "myBox";

// 4. Add to page
parent.appendChild(newDiv);      // Add as last child (old way)
parent.append(newDiv);           // Add as last child (modern)
parent.prepend(newDiv);          // Add as first child
element.before(newDiv);          // Add before element (sibling)
element.after(newDiv);           // Add after element (sibling)


// ═══ REMOVING ELEMENTS ═══

element.remove();  // ⭐ BEST WAY (modern)


// ═══ ATTRIBUTES ═══

// Get attribute
element.getAttribute("href");

// Set attribute
element.setAttribute("href", "https://google.com");

// Remove attribute
element.removeAttribute("target");

// Check if has attribute
element.hasAttribute("href");  // true/false

// Shortcut properties (direct access)
img.src = "image.jpg";
link.href = "https://google.com";
element.id = "myId";
element.className = "myClass";  // Note: className, not class!


// ═══ NAVIGATING DOM ═══

element.parentElement;           // Go up (parent)
element.children;                // Get all children
element.firstElementChild;       // First child
element.lastElementChild;        // Last child
element.previousElementSibling;  // Previous sibling
element.nextElementSibling;      // Next sibling


// ═══════════════════════════════════════════════════════════════════════════════
// 13. EVENT LISTENERS (⭐ ESSENTIAL!)
// ═══════════════════════════════════════════════════════════════════════════════

// ADD EVENT LISTENER
element.addEventListener("click", () => {
    console.log("Clicked!");
});

// ═══ COMMON EVENTS ═══

// CLICK EVENTS
button.addEventListener("click", () => {});
button.addEventListener("dblclick", () => {});  // Double click

// FORM EVENTS
form.addEventListener("submit", (e) => {
    e.preventDefault();  // ⚠️ CRITICAL! Stops page reload!
});

input.addEventListener("input", () => {});   // Every keystroke (real-time)
input.addEventListener("change", () => {});  // After input loses focus

// KEYBOARD EVENTS
input.addEventListener("keydown", (e) => {
    console.log(e.key);  // Which key was pressed
});

input.addEventListener("keyup", (e) => {});

// Detect specific key
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        console.log("Enter pressed!");
    }
});

// MOUSE EVENTS
element.addEventListener("mouseenter", () => {});  // Mouse enters
element.addEventListener("mouseleave", () => {});  // Mouse leaves
element.addEventListener("mouseover", () => {});
element.addEventListener("mouseout", () => {});

// FOCUS EVENTS
input.addEventListener("focus", () => {});   // Input gets focus
input.addEventListener("blur", () => {});    // Input loses focus


// ═══ EVENT OBJECT (⭐ VERY IMPORTANT!) ═══

button.addEventListener("click", (event) => {
    console.log(event.target);        // Element that triggered event
    console.log(event.type);          // "click"
    console.log(event.timeStamp);     // When event happened
});

// event.preventDefault() - Stop default behavior
form.addEventListener("submit", (e) => {
    e.preventDefault();  // Don't reload page!
});

link.addEventListener("click", (e) => {
    e.preventDefault();  // Don't navigate!
});

// Keyboard event properties
input.addEventListener("keydown", (e) => {
    console.log(e.key);        // "a", "Enter", "Shift"
    console.log(e.code);       // "KeyA", "Enter", "ShiftLeft"
    console.log(e.ctrlKey);    // true/false (is Ctrl pressed?)
    console.log(e.shiftKey);   // true/false (is Shift pressed?)
    console.log(e.altKey);     // true/false (is Alt pressed?)
});

// Detect Ctrl+S (or Cmd+S on Mac)
document.addEventListener("keydown", (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key === "s") {
        e.preventDefault();
        console.log("Save triggered!");
    }
});


// ═══════════════════════════════════════════════════════════════════════════════
// 14. FORMS (⭐ CRITICAL FOR WEB APPS!)
// ═══════════════════════════════════════════════════════════════════════════════

// ═══ ACCESSING FORMS ═══

// By name
const form = document.forms.myForm;
const form = document.forms["myForm"];

// By querySelector
const form = document.querySelector("#myForm");


// ═══ ACCESSING FORM ELEMENTS ═══

// By name
const usernameInput = form.elements.username;

// Get all elements
console.log(form.elements.length);


// ═══ GETTING/SETTING VALUES ═══

// Text inputs
input.value;           // Get value
input.value = "John";  // Set value

// Checkboxes
checkbox.checked;         // Get checked state (true/false)
checkbox.checked = true;  // Set checked

// Radio buttons
const radios = form.elements.age;  // All radios with name="age"
for (const radio of radios) {
    if (radio.checked) {
        console.log(radio.value);  // Get selected value
    }
}

// Select/Dropdown
dropdown.value;              // Get selected value
dropdown.selectedIndex;      // Get selected index
dropdown.options;            // Get all options
dropdown.options[1].selected = true;  // Select option


// ═══ FORM SUBMIT HANDLER (MOST IMPORTANT!) ═══

form.addEventListener("submit", (e) => {
    e.preventDefault();  // ⚠️ ALWAYS DO THIS FIRST!
    
    // Get form values
    const username = form.elements.username.value;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    
    // Validation
    if (username.trim() === "") {
        alert("Username is required!");
        form.elements.username.focus();  // Focus on empty field
        return;
    }
    
    if (password.length < 6) {
        alert("Password must be at least 6 characters!");
        return;
    }
    
    // If validation passes
    console.log({ username, email, password });
    alert("Form submitted!");
    
    form.reset();  // Clear form
});


// ═══ HTTP METHODS (Forms) ═══

/* 
<form method="GET" action="/search">
  GET - Data sent in URL (visible, can be bookmarked)
  Used for: Search, filtering, non-sensitive data
  Example: /search?query=hello&category=all
</form>

<form method="POST" action="/login">
  POST - Data sent in request body (not visible in URL)
  Used for: Login, signup, sensitive data
  More secure!
</form>
*/

// ALWAYS use preventDefault() and handle with JavaScript!


// ═══════════════════════════════════════════════════════════════════════════════
// 15. COMMON PATTERNS & REAL-WORLD EXAMPLES
// ═══════════════════════════════════════════════════════════════════════════════

// ═══ PATTERN 1: Toggle Visibility ═══
const button = document.querySelector("#toggleBtn");
const box = document.querySelector("#box");

button.addEventListener("click", () => {
    box.classList.toggle("hidden");
});

// CSS: .hidden { display: none; }


// ═══ PATTERN 2: Dynamic List with Delete ═══
const addBtn = document.querySelector("#addBtn");
const list = document.querySelector("#list");
const input = document.querySelector("#input");

addBtn.addEventListener("click", () => {
    const text = input.value.trim();
    if (text === "") return;
    
    // Create list item
    const li = document.createElement("li");
    li.textContent = text;
    
    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
        li.remove();
    });
    
    li.appendChild(deleteBtn);
    list.appendChild(li);
    
    input.value = "";  // Clear input
    input.focus();     // Focus back
});

// Also allow Enter key
input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addBtn.click();
    }
});


// ═══ PATTERN 3: Form Validation ═══
const form = document.forms.signupForm;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const username = form.elements.username.value.trim();
    const email = form.elements.email.value.trim();
    const password = form.elements.password.value;
    
    // Clear previous errors
    document.querySelectorAll(".error").forEach(el => el.remove());
    
    // Validation
    if (username === "") {
        showError(form.elements.username, "Username is required");
        return;
    }
    
    if (username.length < 3) {
        showError(form.elements.username, "Username must be at least 3 characters");
        return;
    }
    
    if (!email.includes("@")) {
        showError(form.elements.email, "Invalid email");
        return;
    }
    
    if (password.length < 6) {
        showError(form.elements.password, "Password must be at least 6 characters");
        return;
    }
    
    // If all valid
    console.log("Form submitted!", { username, email, password });
    form.reset();
});

function showError(input, message) {
    const error = document.createElement("span");
    error.textContent = message;
    error.classList.add("error");
    error.style.color = "red";
    input.after(error);
    input.focus();
}


// ═══ PATTERN 4: Live Search/Filter ═══
const searchInput = document.querySelector("#search");
const items = document.querySelectorAll(".item");

searchInput.addEventListener("input", () => {
    const searchTerm = searchInput.value.toLowerCase();
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        
        if (text.includes(searchTerm)) {
            item.style.display = "block";  // Show
        } else {
            item.style.display = "none";   // Hide
        }
    });
});


// ═══ PATTERN 5: Character Counter ═══
const textarea = document.querySelector("#message");
const counter = document.querySelector("#counter");
const maxLength = 200;

textarea.addEventListener("input", () => {
    const currentLength = textarea.value.length;
    counter.textContent = `${currentLength} / ${maxLength}`;
    
    if (currentLength > maxLength) {
        counter.style.color = "red";
    } else {
        counter.style.color = "black";
    }
});


// ═══ PATTERN 6: Tabs ═══
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        // Remove active from all
        tabButtons.forEach(b => b.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));
        
        // Add active to clicked
        btn.classList.add("active");
        
        // Show corresponding content
        const tabId = btn.dataset.tab;
        document.getElementById(tabId).classList.add("active");
    });
});

// HTML: <button class="tab-btn" data-tab="tab1">Tab 1</button>


// ═══ PATTERN 7: Modal/Popup ═══
const openModal = document.querySelector("#openModal");
const closeModal = document.querySelector("#closeModal");
const modal = document.querySelector("#modal");

openModal.addEventListener("click", () => {
    modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
    modal.classList.remove("show");
});

// Close on click outside
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});

// Close on Escape key
document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.classList.remove("show");
    }
});


// ═══════════════════════════════════════════════════════════════════════════════
// 16. IMPORTANT CONCEPTS YOU SHOULD KNOW BY NOW
// ═══════════════════════════════════════════════════════════════════════════════

/* 
⭐ PASS BY VALUE vs PASS BY REFERENCE

PRIMITIVES (string, number, boolean) = Pass by VALUE
→ Copy the value
*/
let a = 5;
let b = a;  // b gets a COPY
b = 10;
console.log(a);  // 5 (unchanged)

/* 
OBJECTS & ARRAYS = Pass by REFERENCE
→ Share the same memory location
*/
const obj1 = { name: "John" };
const obj2 = obj1;  // obj2 points to SAME object
obj2.name = "Jane";
console.log(obj1.name);  // "Jane" (changed!)

// To copy objects/arrays (shallow copy):
const copy = { ...original };
const arrCopy = [...originalArray];


/* 
⭐ STRICT MODE (Add at top of file for better error checking)
*/
"use strict";
// Now, certain mistakes become errors instead of silent failures


/* 
⭐ TEMPLATE LITERALS (Backticks for strings)
*/
const name = "John";
const age = 30;

// Old way (concatenation)
const str = "My name is " + name + " and I'm " + age + " years old";

// Modern way (template literals) ⭐
const str = `My name is ${name} and I'm ${age} years old`;

// Multi-line strings
const multiline = `
    Line 1
    Line 2
    Line 3
`;


/* 
⭐ TRUTHY & FALSY VALUES

FALSY (evaluates to false in conditionals):
- false
- 0
- "" (empty string)
- null
- undefined
- NaN

TRUTHY = Everything else!
*/
if ("hello") {  // truthy
    console.log("This runs!");
}

if ("") {  // falsy
    console.log("This doesn't run!");
}


/* 
⭐ SHORT-CIRCUIT EVALUATION

&& (AND) - Returns first falsy OR last value
|| (OR) - Returns first truthy OR last value
*/
const username = user.name || "Guest";  // If name is falsy, use "Guest"
const shouldProceed = isLoggedIn && hasPermission;  // Both must be true


/* 
⭐ NULLISH COALESCING (??) - Only null/undefined, not all falsy
*/
const count = 0;
console.log(count || 10);   // 10 (0 is falsy)
console.log(count ?? 10);   // 0 (0 is not null/undefined)


/* 
⭐ OPTIONAL CHAINING (?.) - Safely access nested properties
*/
const user = { address: { city: "NYC" } };
console.log(user.address?.city);  // "NYC"
console.log(user.phone?.number);  // undefined (no error!)


/* 
⭐ ARRAY/OBJECT COMPARISON (Always use JSON.stringify)
*/
[1, 2] === [1, 2]  // false (different references!)
JSON.stringify([1, 2]) === JSON.stringify([1, 2])  // true


/* 
⭐ TRY...CATCH (Error Handling)
*/
try {
    // Code that might throw error
    const data = JSON.parse(userInput);
} catch (error) {
    console.log("Error:", error.message);
} finally {
    // Always runs (optional)
    console.log("Done");
}


/* 
⭐ CONSOLE METHODS (For debugging)
*/
console.log("Normal log");
console.error("Error message");
console.warn("Warning");
console.table([{ name: "John", age: 30 }]);  // Pretty table
console.clear();  // Clear console


/* 
⭐ TIMING FUNCTIONS
*/
setTimeout(() => {
    console.log("Runs after 2 seconds");
}, 2000);

setInterval(() => {
    console.log("Runs every 3 seconds");
}, 3000);


// ═══════════════════════════════════════════════════════════════════════════════
// 17. BEST PRACTICES SUMMARY
// ═══════════════════════════════════════════════════════════════════════════════

/* 
✅ DO:
- Use const by default, let when needed, NEVER var
- Use === and !==, NEVER == or !=
- Use arrow functions for callbacks and short functions
- Use template literals (``) instead of concatenation
- Use querySelector/querySelectorAll
- Use classList instead of className
- Always preventDefault() on form submit
- Use modern array methods (map, filter, reduce)
- Use destructuring when extracting multiple values
- Use spread operator for copying arrays/objects
- Comment your code when logic is complex

❌ DON'T:
- Don't use var
- Don't use == or !=
- Don't modify arrays/objects directly when you need a copy
- Don't forget to return in reduce()
- Don't forget preventDefault() on forms
- Don't use innerHTML with user input (XSS risk!)
- Don't use global variables unnecessarily
- Don't repeat yourself (DRY principle)
*/


// ═══════════════════════════════════════════════════════════════════════════════
// 18. NODE.JS — BACKEND JAVASCRIPT
// ═══════════════════════════════════════════════════════════════════════════════

/*
⭐ THE CLIENT-SERVER MODEL

  Browser (Client)                    Node.js Server
        │                                   │
        │  ──── HTTP Request (GET /api) ──► │
        │                                   │  processes request
        │  ◄─── HTTP Response (JSON) ─────  │
        │                                   │

Every website works this way:
- Client ASKS for something (request)
- Server RESPONDS with data (response)

PORTS = doors into your computer
  localhost:3000 → your app is listening at port 3000
  localhost:5000 → your app is listening at port 5000
*/

// ─── HTTP STATUS CODES ────────────────────────────────
// 200 → ✅ OK              (worked!)
// 201 → ✅ Created          (new resource made!)
// 204 → ✅ No Content       (worked, nothing to return)
// 400 → ❌ Bad Request      (client sent bad data)
// 401 → 🔒 Unauthorized     (not logged in)
// 403 → 🚫 Forbidden        (logged in but no access)
// 404 → 🔍 Not Found        (route doesn't exist)
// 500 → 💥 Server Error     (our server code broke)

// ─── HTTP VERBS (map to CRUD) ─────────────────────────
// GET    → READ   (fetch data, no body needed)
// POST   → CREATE (send data in body to create something)
// PUT    → UPDATE (send data in body to replace something)
// DELETE → DELETE (remove something)


// ═══════════════════════════════════════════════════════════════════════════════
// 19. NODE.JS HTTP MODULE (The Raw Way)
// ═══════════════════════════════════════════════════════════════════════════════

const http = require('http')  // built-in Node module, no install needed

const server = http.createServer((req, res) => {
    // req = incoming request (what client sent)
    // res = outgoing response (what we send back)

    res.statusCode = 200
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ message: 'Hello World' }))
})

server.listen(5000, () => {
    console.log('Server is listening at localhost on port 5000')
})

// ─── KEY RESPONSE METHODS ─────────────────────────────
res.end('text here')                         // send response and close
res.statusCode = 200                          // set status code
res.setHeader('Content-Type', 'text/html')   // set response header
res.writeHead(404, { 'Content-Type': 'text/html' })  // status + headers at once


// ═══════════════════════════════════════════════════════════════════════════════
// 20. EXPRESS.JS — THE SMART WAY
// ═══════════════════════════════════════════════════════════════════════════════

// SETUP (terminal commands)
// npm init -y              ← creates package.json
// npm install express      ← installs express
// npx nodemon app.js       ← runs server, auto-restarts on file changes

const express = require('express')
const app = express()

// ─── ESSENTIAL MIDDLEWARE ─────────────────────────────
app.use(express.json())          // parses JSON request bodies → enables req.body
app.use(express.urlencoded({ extended: true }))  // parses HTML form bodies
app.use(express.static('public'))  // serves static files from /public folder

// ─── ROUTE ANATOMY ────────────────────────────────────
// app.METHOD(PATH, HANDLER)
//     │        │      └── function(req, res) { ... }
//     │        └───────── '/api/products'
//     └────────────────── get / post / put / delete

// ─── BASIC ROUTES ─────────────────────────────────────
app.get('/', (req, res) => {
    res.send('Hello World!')           // send plain text
})

app.get('/api/data', (req, res) => {
    res.json({ message: 'success' })   // send JSON (sets Content-Type automatically)
})

app.get('/api/data', (req, res) => {
    res.status(201).json({ id: 1 })    // chain status + json
})

// ─── RESPONSE METHODS ────────────────────────────────
res.send('text')                       // send any text
res.json({ key: 'value' })            // send JSON object ✅ most used
res.status(404).send('Not found')      // set status code + send
res.status(201).json(newItem)          // chain status + json ✅
res.sendFile(__dirname + '/index.html') // send a file

app.listen(5000, () => console.log('Server running on port 5000'))


// ═══════════════════════════════════════════════════════════════════════════════
// 21. ROUTE PARAMETERS & QUERY STRINGS
// ═══════════════════════════════════════════════════════════════════════════════

// ─── ROUTE PARAMETERS (:paramName) ───────────────────
// Use for identifying a SPECIFIC resource
// URL: /api/products/42

app.get('/api/products/:productID', (req, res) => {
    const id = Number(req.params.productID)  // ⚠️ params are always STRINGS! Convert!
    const product = products.find(p => p.id === id)

    if (!product) {
        return res.status(404).send('Product not found')  // ← return stops execution
    }
    res.json(product)
})

// Multiple params:
// Route: /users/:userId/books/:bookId
// URL:   /users/34/books/89
// req.params → { userId: "34", bookId: "89" }

// ─── QUERY STRINGS (?key=value) ──────────────────────
// Use for FILTERING or SEARCHING
// URL: /api/products?name=phone&minPrice=500

app.get('/api/products', (req, res) => {
    const name = req.query.name   // "phone"
    const min  = req.query.minPrice  // "500"

    const results = products.filter(p =>
        p.name.toLowerCase().includes(name.toLowerCase())
    )
    res.json(results)
})

// ─── THE 3 WAYS TO GET DATA FROM A REQUEST ───────────
// req.params  → /products/:id         → data IN the URL path
// req.query   → /products?name=iphone → data AFTER the ? in URL
// req.body    → POST/PUT body         → JSON data in request body (needs express.json())


// ═══════════════════════════════════════════════════════════════════════════════
// 22. FULL CRUD API PATTERN
// ═══════════════════════════════════════════════════════════════════════════════

// data.js ──────────────────────────────────────────────
const products = [
    { id: 1, name: 'iPhone', price: 800 },
    { id: 2, name: 'iPad',   price: 650 },
]
module.exports = products  // export from this file

// app.js ───────────────────────────────────────────────
const express  = require('express')
const products = require('./data.js')  // import data module
const app      = express()
app.use(express.json())  // ALWAYS needed for POST/PUT

// CREATE ── POST /api/products
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,  // auto-increment ID
        name: req.body.name,       // from JSON body
        price: req.body.price,
    }
    products.push(newProduct)
    res.status(201).json(newProduct)  // 201 = Created
})

// READ ALL ── GET /api/products
app.get('/api/products', (req, res) => {
    res.json(products)
})

// READ ONE ── GET /api/products/:id
app.get('/api/products/:productID', (req, res) => {
    const id      = Number(req.params.productID)
    const product = products.find(p => p.id === id)

    if (!product) return res.status(404).send('Product not found')
    res.json(product)
})

// UPDATE ── PUT /api/products/:id
app.put('/api/products/:productID', (req, res) => {
    const id    = Number(req.params.productID)
    const index = products.findIndex(p => p.id === id)

    if (index === -1) return res.status(404).send('Product not found')

    products[index] = {
        id:    products[index].id,  // keep original ID
        name:  req.body.name,
        price: req.body.price,
    }
    res.json(products[index])
})

// DELETE ── DELETE /api/products/:id
app.delete('/api/products/:productID', (req, res) => {
    const id    = Number(req.params.productID)
    const index = products.findIndex(p => p.id === id)

    if (index === -1) return res.status(404).send('Product not found')

    products.splice(index, 1)  // remove 1 element at index
    res.json({ message: 'Product deleted' })
})

app.listen(5000, () => console.log('Server running on port 5000'))

// ─── KEY ARRAY METHODS FOR CRUD ──────────────────────
arr.find(item => item.id === id)          // returns the item (or undefined)
arr.findIndex(item => item.id === id)     // returns index (or -1 if not found)
arr.push(newItem)                          // add to end
arr.splice(index, 1)                       // remove 1 item at index
arr.filter(item => item.id !== id)         // return new array without item


// ═══════════════════════════════════════════════════════════════════════════════
// 23. FETCH API — FRONTEND TO BACKEND COMMUNICATION
// ═══════════════════════════════════════════════════════════════════════════════

// ─── GET REQUEST (read data) ──────────────────────────
const response = await fetch('http://localhost:5000/api/products')
const data = await response.json()
console.log(data)  // array of products

// ─── POST REQUEST (send data) ─────────────────────────
const response = await fetch('http://localhost:5000/api/products', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'  // ← MUST include this!
    },
    body: JSON.stringify({   // ← MUST stringify objects!
        name: 'AirPods',
        price: 199
    })
})
const newProduct = await response.json()

// ─── PUT REQUEST (update data) ────────────────────────
const response = await fetch('http://localhost:5000/api/products/1', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'AirPods Pro', price: 249 })
})

// ─── DELETE REQUEST ──────────────────────────────────
const response = await fetch('http://localhost:5000/api/products/1', {
    method: 'DELETE'
})

// ─── FULL FETCH WITH ERROR HANDLING ──────────────────
async function createProduct(name, price) {
    try {
        const response = await fetch('http://localhost:5000/api/products', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, price })
        })

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Fetch failed:', error)
    }
}


// ═══════════════════════════════════════════════════════════════════════════════
// 24. NODE.JS MODULE SYSTEM
// ═══════════════════════════════════════════════════════════════════════════════

// ─── EXPORTING ────────────────────────────────────────
// data.js
const products = [{ id: 1, name: 'iPhone' }]
module.exports = products          // export a single thing

// utils.js
module.exports = {                 // export multiple things
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
}

// ─── IMPORTING ────────────────────────────────────────
const products = require('./data')         // your own file (use ./)
const express  = require('express')        // npm package (no ./)
const http     = require('http')           // built-in Node module (no ./)
const { add, subtract } = require('./utils')  // destructured import

// ─── BUILT-IN NODE MODULES ───────────────────────────
const http = require('http')     // create HTTP server
const path = require('path')     // work with file paths
const fs   = require('fs')       // read/write files


// ═══════════════════════════════════════════════════════════════════════════════
// 25. POSTMAN — API TESTING TOOL
// ═══════════════════════════════════════════════════════════════════════════════

/*
Postman lets you send HTTP requests WITHOUT a frontend.
Essential for testing your Express APIs.

HOW TO TEST EACH CRUD OPERATION:

GET (read all):
  Method: GET
  URL: http://localhost:5000/api/products
  → Just press Send!

GET (read one):
  Method: GET
  URL: http://localhost:5000/api/products/1
  → Just press Send!

POST (create):
  Method: POST
  URL: http://localhost:5000/api/products
  Body tab → raw → JSON
  { "name": "Samsung", "price": 900 }

PUT (update):
  Method: PUT
  URL: http://localhost:5000/api/products/1
  Body tab → raw → JSON
  { "name": "Samsung Ultra", "price": 1200 }

DELETE:
  Method: DELETE
  URL: http://localhost:5000/api/products/1
  → Just press Send!
*/


// ═══════════════════════════════════════════════════════════════════════════════
// 26. COMMON PATTERNS & GOTCHAS
// ═══════════════════════════════════════════════════════════════════════════════

// ✅ Always convert params from string to number
const id = Number(req.params.id)  // req.params.id is "42" (string), not 42

// ✅ Always use return with early error responses (stops execution)
if (!product) return res.status(404).send('Not found')
// Without return, code keeps running after sending the response!

// ✅ Always use app.use(express.json()) for POST/PUT routes
// Without it, req.body is undefined

// ✅ Use findIndex (not find) when you need to UPDATE or DELETE
const index = products.findIndex(p => p.id === id)
// find() returns the item, findIndex() returns the position in array

// ✅ Check for -1 when using findIndex (not found case)
if (index === -1) return res.status(404).send('Not found')

// ✅ Use JSON.stringify() when sending data with fetch
body: JSON.stringify({ name: 'test' })   // ✅
body: { name: 'test' }                   // ❌ won't work!

// ✅ Always include Content-Type header for POST/PUT fetch
headers: { 'Content-Type': 'application/json' }


// ═══════════════════════════════════════════════════════════════════════════════
// 🎉 YOU'VE MASTERED JAVASCRIPT FUNDAMENTALS + NODE.JS BACKEND!
// ═══════════════════════════════════════════════════════════════════════════════
// What's Next?
// - Databases (MongoDB, PostgreSQL) — replace the array with real storage
// - Authentication (JWT tokens) — protect your routes
// - More advanced Express patterns (routers, controllers, middleware)
// - Full-stack apps (React frontend + Express backend)
// ═══════════════════════════════════════════════════════════════════════════════
