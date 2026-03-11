//------------ex1-----------------






//------------Daily Challenge: Node.js App & NPM-----------------

function greet(name) {
    return `Hello ${name}, welcome!`
}

module.exports = { greet }

// other file

const  { greet } = require("./???.js") // the file where greet is from



// the other file 

const chalk = require("chalk")

function colorfulMessage() {
    console.log(chalk.blue("message"))
    console.log(chalk.red.bold("message"))
    console.log(chalk.green("message"))
}

module.exports = { colorfulMessage }

// other file

const { colorfulMessage } = require("./???.js") // the file where colorfulMessage is from

colorfulMessage()


const fs = require("fs")

function readFile() {
    fs.readFile("./...", "utf8", (err, data) => {
        if (err) return console.log(err)
        console.log(data)
    })
}

module.exports = { readFile }

// other file

const { readFile } = require("./...")

readFile()


// challenge.js

const { greet } = require("./...")
const { colorfulMessage } = require("./...")
const { readFile } = require("./...")

console.log(greet("Name"))
colorfulMessage()
readFile()



// i just didnt bother w the names wsf