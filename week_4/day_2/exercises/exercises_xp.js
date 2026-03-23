//------------ex1-----------------
const inventory = [
  { name: "asdasd", price: 123, category: "asjdhnasd" },
  { name: "laptop", price: 252, category: "electros" },
  { name: "phone", price: 30, category: "electros" },
  { name: "table", price: 3, category: "furniture" },
];

// When using a separate module: const catalog = require("./app.js");

function findProduct(label) {
  const match = inventory.find((row) => row.name === label);
  console.log(match);
}

findProduct("laptop");
findProduct("table");
findProduct("phone");

//------------ex2-----------------

export const roster = [
  { name: "asdd", age: 12, location: "asd" },
  { name: "asdd", age: 12, location: "asd" },
  { name: "asdd", age: 12, location: "asd" },
];

// other file
// import { roster } from "./people.js";

function averageAge(records) {
  const sumYears = records.reduce((acc, row) => acc + row.age, 0);
  console.log(sumYears / records.length);
}

averageAge(roster);

//------------ex3-----------------

const fs = require("fs");

function loadTextFile(filePath) {
  fs.readFile(filePath, "utf8", (readErr, payload) => {
    if (readErr) return console.log(readErr);
    console.log(payload);
  });
}

function saveTextFile(filePath, payload) {
  fs.writeFile(filePath, payload, (writeErr) => {
    if (writeErr) return console.log(writeErr);
    console.log("File done");
  });
}

module.exports = { loadTextFile, saveTextFile };

// other file
// const { loadTextFile, saveTextFile } = require("./io.js");
// saveTextFile("texto.txt", "message");
// loadTextFile("texto.txt");

//------------ex4-----------------

export class Checklist {
  constructor() {
    this.items = [];
  }

  addItem(label) {
    this.items.push({ label, completed: false });
  }

  markDone(label) {
    const row = this.items.find((x) => x.label === label);
    if (row) row.completed = true;
  }

  printAll() {
    console.log(this.items);
  }
}

// other file
// import { Checklist } from "./todos.js";
// const checklist = new Checklist();
// checklist.addItem("task 1");
// checklist.markDone("task 1");
// checklist.printAll();

//------------ex5-----------------

const _ = require("lodash");

function sumPair(x, y) {
  return x + y;
}
function productPair(x, y) {
  return x * y;
}

const values = [1, 2, 3, 4, 5];
const scaled = _.map(values, (n) => n * 2);

console.log("scaled: ", scaled);
console.log("sumPair: ", sumPair(5, 3));
console.log("productPair: ", productPair(5, 3));

module.exports = { sumPair, productPair };

//------------ex6-----------------

const chalk = require("chalk");

console.log(chalk.blue("message"));
console.log(chalk.red.bold("message"));
console.log(chalk.green("message"));

//------------ex7-----------------

fs.readFile("texts.txt", "utf8", (readErr, payload) => {
  if (readErr) return console.log(readErr);
  fs.writeFile("destext.txt", payload, (writeErr) => {
    if (writeErr) return console.log(writeErr);
    console.log("done");
  });
});

// other file — reuse fs from ex3 in a real split, or: const fs = require("fs");
fs.readdir(".", (readErr, names) => {
  if (readErr) return console.log(readErr);
  console.log("files : ", names);
});
