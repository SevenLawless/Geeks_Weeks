//----------------------ex1----------------------

function displayNumbersDivisible() {
    let sum = 0;
  for (let i = 1; i <= 500; i++) {
    if (i % 23 === 0) {
      console.log(i + " is divisible by 23");
        sum += i;
    }
}
console.log("Sum: " + sum);
}

displayNumbersDivisible();


//----------------------ex2----------------------

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  

const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ["banana", "orange", "apple"];

function myBill() {
    let total = 0;
    for (let item of shoppingList) {
        if (item in stock && stock[item] > 0) {
            total += prices[item];
            stock[item] -= 1;
        }
    }
    return total;
}

console.log("Total Bill: $" + myBill());


//----------------------ex3----------------------


function changeEnough(itemPrice, amountOfChange) {
    let sum = 0;
    sum += amountOfChange[0] * 0.25;
    sum += amountOfChange[1] * 0.10;
    sum += amountOfChange[2] * 0.05;
    sum += amountOfChange[3] * 0.01;
    return sum >= itemPrice;
}
console.log(changeEnough(4.25, [25, 20, 5, 0]));


//----------------------ex4----------------------


function hotelCost(nights) {
    return nights * 140;
}

function planeRideCost(destination) {
    destination = destination.toLowerCase();
    if (destination === "london") return 183;
    if (destination === "paris") return 220;
    return 300;
}

function rentalCarCost(days) {
    let cost = days * 40;
    if (days > 10) cost *= 0.95;
    return cost;
}

function totalVacationCost() {
    let nights, destination, days;
    
    do {
        nights = parseInt(prompt("How many nights?"));
    } while (isNaN(nights) || nights <= 0);
    
    do {
        destination = prompt("What's your destination?");
    } while (!destination || typeof destination !== 'string');
    
    do {
        days = parseInt(prompt("How many days to rent?"));
    } while (isNaN(days) || days <= 0);
    
    let hotel = hotelCost(nights);
    let plane = planeRideCost(destination);
    let car = rentalCarCost(days);
    let total = hotel + plane + car;
    
    console.log(`The car cost: $${car}, the hotel cost: $${hotel}, the plane tickets cost: $${plane}.`);
    console.log(`Total vacation cost: $${total}`);
}

totalVacationCost();


//----------------------ex5----------------------

let container = document.getElementById("container");
console.log(container);
let lists = document.querySelectorAll(".list");
lists[0].children[1].textContent = "Richard";
lists[1].children[1].remove();

for (let i = 0; i < lists.length; i++) {
    lists[i].firstElementChild.textContent = "Zakaria";
}

for (let i = 0; i < lists.length; i++) {
    lists[i].classList.add("student_list");
}

lists[0].classList.add("university", "attendance");
container.style.backgroundColor = "lightblue";
container.style.padding = "20px";
lists[1].children[1].style.display = "none";
lists[0].children[1].style.border = "2px solid black";
document.body.style.fontSize = "20px";

if (container.style.backgroundColor === "lightblue") {
    let firstUser = lists[0].firstElementChild.textContent;
    let secondUser = lists[1].firstElementChild.textContent;
    alert(`Hello ${firstUser} and ${secondUser}`);
}



//----------------------ex6----------------------

let navbar = document.getElementById("navBar");
navbar.setAttribute("id", "socialNetworkNavigation");

let ul = navbar.querySelector("ul");
let newLi = document.createElement("li");
newLi.textContent = "Logout";
ul.appendChild(newLi);

let firstLi = ul.firstElementChild;
let lastLi = ul.lastElementChild;
console.log("First link: " + firstLi.textContent);
console.log("Last link: " + lastLi.textContent);


//----------------------ex7----------------------
const allBooks = [
    {
        title: "Captain Majid",
        author: "mokhrij 1",
        image: "https://m.media-amazon.com/images/M/MV5BNjczMTY2M2EtNjQ2Zi00MjFhLWJmOGItN2MyNjk3YTdiYWI3XkEyXkFqcGc@._V1_.jpg",
        alreadyRead: true
    },
    {
        title: "Adam",
        author: "Adam",
        image: "https://miro.medium.com/v2/resize:fit:1124/0*-G6zP5TW_kWDzEpP.jpg",
        alreadyRead: false
    }
];

let section = document.querySelector(".listBooks");

for (let book of allBooks) {
    let bookDiv = document.createElement("div");
    let bookDetails = document.createElement("p");
    bookDetails.textContent = `${book.title} written by ${book.author}`;
    
    if (book.alreadyRead) {
        bookDetails.style.color = "red";
    }

    let bookImg = document.createElement("img");
    bookImg.src = book.image;
    bookImg.style.width = "100px";
    

    bookDiv.appendChild(bookImg);
    bookDiv.appendChild(bookDetails);

    section.appendChild(bookDiv);
}