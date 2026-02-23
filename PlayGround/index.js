// ---------------------------------day 4------------------------------
// ---------------------------------xp------------------------------


// 1 
    // <form method="GET">
    //     <input type="text" name="name" placeholder="Enter name" />
    //     <textarea name="message" placeholder="Enter text"></textarea>
    //     <button type="submit">Send</button>
    // </form>


// 2

// in the network tab in the payload, next to the headers


// 3
// const marioGame = {
//     detail: "An amazing game!",
//     characters: {
//         mario: {
//             description: "Small and jumpy. Likes princesses.",
//             height: 10,
//             weight: 3,
//             speed: 12,
//         },
//         bowser: {
//             description: "Big and green, Hates princesses.",
//             height: 16,
//             weight: 6,
//             speed: 4,
//         }
//     }
// }

// const mario2 = JSON.stringify(marioGame, null, 2);
// console.log(mario2);




// ---------------------------------daily challenge------------------------------

// 1


// const btn = document.querySelector("#button");
// const section = document.querySelector("section")

// btn.addEventListener('click', function(event) {
//     event.preventDefault()
//     const fst = document.querySelector("#first")
//     const lst = document.querySelector("#last")

//     const data = JSON.stringify({ name: fst.value, lastname: lst.value })
//     section.innerText = data
// });


// 2

// const allTruthy = (...args) => {
//     return args.every(x => x)
// }

// allTruthy([1, 'hello', true]);


// ---------------------------------xp gold------------------------------

// // ---------------------------------index.html
//     <form method="GET" action="formdata.html">
//         <span>First Name</span>
//         <input type="text" name="firstname" placeholder="Enter first name" />
//         <span>Last Name</span>
//         <input type="text" name="lastname" placeholder="Enter last name" />
//         <button type="submit">Submit</button>
//     </form>
// // ---------------------------------formdata.html
//         const params = new URLSearchParams(window.location.search)

//         const firstname = params.get("firstname")
//         const lastname = params.get("lastname")

//         const body = document.querySelector("body");
//         const newP = document.createElement("p");
//         newP.innerText = `${firstname} ${lastname}`
//         body.append(newP);
// // ---------------------------------formdata js
// const form = document.querySelector('form');

// form.addEventListener('submit', function (event) {
//     const formData = new FormData(form);
//     console.log(new URLSearchParams(formData));

// })

// ---------------------------------xp ninja------------------------------


