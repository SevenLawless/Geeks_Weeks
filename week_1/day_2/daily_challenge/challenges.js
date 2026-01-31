// ====== Daily Planets

const planetsWithMoons = [
    { name: "Mercury", moons: 0, color: "gray" },
    { name: "Venus", moons: 0, color: "orange" },
    { name: "Earth", moons: 1, color: "blue" },
    { name: "Mars", moons: 2, color: "red" },
    { name: "Jupiter", moons: 79, color: "brown" },
    { name: "Saturn", moons: 82, color: "gold" },
    { name: "Uranus", moons: 27, color: "lightblue" },
    { name: "Neptune", moons: 14, color: "darkblue" }
];

const section = document.querySelector(".listPlanets");

for (let planet of planetsWithMoons) {

    let planetDiv = document.createElement("div");
    planetDiv.classList.add("planet");
    planetDiv.style.backgroundColor = planet.color;
    planetDiv.textContent = planet.name;
    
    for (let i = 0; i < planet.moons; i++) {
        let moonDiv = document.createElement("div");
        moonDiv.classList.add("moon");

        planetDiv.appendChild(moonDiv);
    }
    
    section.appendChild(planetDiv);
}




// ====== Daily Words in the stars

let input = prompt("Enter words separated by commas:");
let words = input.split(", ");

let maxLength = 0;
for (let word of words) {
    if (word.length > maxLength) {
        maxLength = word.length;
    }
}

let topBorder = "*".repeat(maxLength + 4);
console.log(topBorder);

for (let word of words) {
    let padding = " ".repeat(maxLength - word.length);
    console.log(`* ${word}${padding} *`);
}

console.log(topBorder);