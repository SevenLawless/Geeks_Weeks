// 1 
    <form method="GET">
        <input type="text" name="name" placeholder="Enter name" />
        <textarea name="message" placeholder="Enter text"></textarea>
        <button type="submit">Send</button>
    </form>


// 2

// in the network tab in the payload, next to the headers


// 3
const marioGame = {
    detail: "An amazing game!",
    characters: {
        mario: {
            description: "Small and jumpy. Likes princesses.",
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: "Big and green, Hates princesses.",
            height: 16,
            weight: 6,
            speed: 4,
        }
    }
}

const mario2 = JSON.stringify(marioGame, null, 2);
console.log(mario2);