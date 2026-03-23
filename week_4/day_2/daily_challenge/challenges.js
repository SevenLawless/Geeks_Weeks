//------------ex1-----------------

function welcomeUser(displayName) {
  return `Hello ${displayName}, welcome!`;
}

module.exports = { welcomeUser };

// consumer file
// const { welcomeUser } = require("./greet.js");

//------------Daily Challenge: Node.js App & NPM-----------------

const chalk = require("chalk");

function printStyledLines() {
  console.log(chalk.blue("message"));
  console.log(chalk.red.bold("message"));
  console.log(chalk.green("message"));
}

module.exports = { printStyledLines };

// consumer file
// const { printStyledLines } = require("./colors.js");
// printStyledLines();

const fs = require("fs");

function loadFileContents() {
  fs.readFile("./sample.txt", "utf8", (readErr, payload) => {
    if (readErr) return console.log(readErr);
    console.log(payload);
  });
}

module.exports = { loadFileContents };

// consumer file
// const { loadFileContents } = require("./reader.js");
// loadFileContents();

// challenge.js (entry)
// const { welcomeUser } = require("./greet.js");
// const { printStyledLines } = require("./colors.js");
// const { loadFileContents } = require("./reader.js");
// console.log(welcomeUser("Name"));
// printStyledLines();
// loadFileContents();
