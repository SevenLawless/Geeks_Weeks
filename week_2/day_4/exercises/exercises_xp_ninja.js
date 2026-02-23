const arr = [
    { id: 0, author: "ana", quote: "life is bootiful", likes: 0 },
    { id: 1, author: "reda", quote: "life is not bootiful", likes: 0 },
    { id: 2, author: "mohmad", quote: "l7ayatch, l7ayatch", likes: 0 }
]


const btnn = document.querySelector("#btnn")
const sect = document.querySelector("#quoteDisplay")


let current = null

btnn.addEventListener('click', function(e) {
    e.preventDefault()
    let newNum
    do {
        newNum = Math.floor(Math.random() * arr.length)
    } while (newNum === current)
    current = newNum
    sect.innerHTML = `${arr[newNum].quote} by ${arr[newNum].author}`
})



const countbtn = document.querySelector("#countbtn")
const countspn = document.querySelector("#countspn")
countbtn.addEventListener('click', function() {
    countspn.innerHTML = sect.innerText.length
})

const countbtn2 = document.querySelector("#countbtn2")
const countspn2 = document.querySelector("#countspn2")
countbtn2.addEventListener('click', function() {
    countspn2.innerHTML = sect.innerText.replace(/ /g, "").length
})

const countbtn3 = document.querySelector("#countbtn3")
const countspn3 = document.querySelector("#countspn3")
countbtn3.addEventListener('click', function() {
    countspn3.innerHTML = sect.innerText.split(" ").length
})

const countbtn4 = document.querySelector("#countbtn4")
const countspn4 = document.querySelector("#countspn4")
countbtn4.addEventListener('click', function() {
    arr[current].likes++
    countspn4.innerHTML = `Likes: ${arr[current].likes}`
})


const addForm = document.querySelector("#addForm")
const addButton = document.querySelector("#addButton")

const quoteInput = addForm.elements.quote
const authorInput = addForm.elements.author

addButton.addEventListener('click', function(e) {
    e.preventDefault()
    const newQuote = {
        id: arr.length,
        author: authorInput.value,
        quote: quoteInput.value,
        likes: 0
    }

    arr.push(newQuote)

    addForm.reset()
})


const authorForm = document.querySelector("#authorForm")
const authorName = authorForm.elements.author
const searchButton = document.querySelector("#searchButton")
const sect3 = document.querySelector("#authorSearched")

let filtered = []
let filterIndex = 0

searchButton.addEventListener('click', function(e) {
    e.preventDefault()
    filtered = arr.filter(x => x.author === authorName.value)

    filterIndex = 0

    if (filtered.length === 0) {
        sect3.innerHTML = "No quotes found for this author!"
        return
    }

    sect3.innerHTML = `${filtered[filterIndex].quote} by ${filtered[filterIndex].author}`
})

const nextBtn = document.querySelector("#nextBtn")
nextBtn.addEventListener('click', function() {
    if (filterIndex < filtered.length - 1) {
        filterIndex++
        sect3.innerHTML = `${filtered[filterIndex].quote} by ${filtered[filterIndex].author}`
    }
})

const prevBtn = document.querySelector("#prevBtn")
prevBtn.addEventListener('click', function() {
    if (filterIndex > 0) {
        filterIndex--
        sect3.innerHTML = `${filtered[filterIndex].quote} by ${filtered[filterIndex].author}`
    }
})