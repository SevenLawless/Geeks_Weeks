// 1


const btn = document.querySelector("#button");
const section = document.querySelector("section")

btn.addEventListener('click', function(event) {
    event.preventDefault()
    const fst = document.querySelector("#first")
    const lst = document.querySelector("#last")

    const data = JSON.stringify({ name: fst.value, lastname: lst.value })
    section.innerText = data
});


// 2

const allTruthy = (...args) => {
    return args.every(x => x)
}

allTruthy([1, 'hello', true]);