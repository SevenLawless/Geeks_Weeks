//------------ex1-----------------
const products = [{
    name: "asdasd",
    price: 123,
    category: "asjdhnasd",
}, 
{
    name: "laptop",
    price: 252,
    category: "electros",
}, 
{
    name: "phone",
    price: 30,
    category: "electros",
}, 
{
    name: "table",
    price: 3,
    category: "furniture",
}];

const products = require('app.js')

function findProduct(productName) {
    const product = products.find(p => p.name === productName)
    console.log(product) 
}


findProduct("laptop")
findProduct("table")
findProduct("phone")


//------------ex2-----------------

export const people = [
    {name: "asdd", age: 12, location: "asd"},
    {name: "asdd", age: 12, location: "asd"},
    {name: "asdd", age: 12, location: "asd"}
]


// other file
import { people } from "./???.js" // from wherever the file is

function averageAge(arr) {
    const total = arr.reduce((sum, person) => sum + person.age, 0)
    console.log(total / arr.length)
}

averageAge(people)



//------------ex3-----------------


const fs = require("fs")

function readFile(path) {
    fs.readFile(path, "utf8", (err, data) => {
        if (err) return console.log(err)
        console.log(data)
    })
}

function writeFile(path, content) {
    fs.writeFile(path, content, (err) => {
        if (err) return console.log(err)
        console.log("File done")
    })
}


module.exports = { readFile, writeFile }

// other file 

const { readFile, writeFile } = require("./???.js") // from wherever the file is

writeFile("texto.txt", "message")
writeFile("texto.txt", "message")
readFile("texto.txt")




//------------ex4-----------------



export class TodoList {
    constructor() {
        this.todos = []
    }

    addTask(task) {
        this.todos.push({ task, completed: false })
    }

    markCompleted(task) {
        const todo = this.todos.find(t => t.task === task)
        if (todo) todo.completed = true
    }

    listAll() {
        console.log(this.todos)
    }
}

// other file 

import { TodoList } from "???.js" // from wherever the file is

const list = new TodoList()
list.addTask("do somethin 1")
list.addTask("do somethin 2")
list.addTask("do somethin 3")
list.markCompleted("do somethin 1")
list.listAll()


//------------ex5-----------------

const _ = require("lodash")

function add(a, b) { return a + b}
function multiply(a, b) { return a * b}

const numbers = [1, 2, 3, 4, 5]
const doubled = _.map(numbers, n => n * 2)

console.log("doubled: ", doubled)
console.log("add: ", add(5, 3))
console.log("multiply: ", multiply(5, 3))

module.exports = { add, multiply }


//------------ex6-----------------


const chalk = require("chalk")

console.log(chalk.blue("message"))
console.log(chalk.red.bold("message"))
console.log(chalk.green("message"))



//------------ex7-----------------


const fs = require("fs")

fs.readFile("texts.txt", "utf8", (err, data) => {
    if (err) return console.log(err)
    fs.writeFile("destext.txt", data, (err) => {
        if (err) return console.log(err)
        console.log("done")
    })
})

// other file 

const fs = require("fs")

fs.readdir(".", (err, files) => {
    if (err) return console.log(err)
    console.log("files : ", files)
})