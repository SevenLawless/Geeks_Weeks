//------------RoboFriends-----------------

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Geeks Weeks</title>
    <link href="https://fonts.cdnfonts.com/css/press-start-2p" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Press Start 2P', sans-serif;
            background-color: #282c35;
            color: white;
            text-align: center;
            background-image: url('circuit-pattern.png');
            background-repeat: repeat;
            background-size: 300px;
        }

        h1 {
            font-size: 1.5rem;
            padding: 20px;
            color: #000000;
        }

        input {
            padding: 10px;
            width: 300px;
            border-radius: 5px;
            border: none;
            margin-bottom: 20px;
            font-size: 1rem;
        }

        #maindiv {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 20px;
            padding: 20px;
        }

        .card {
            background-color: #3d4351;
            border-radius: 10px;
            padding: 20px;
            width: 200px;
        }

        .card img {
            width: 150px;
            border-radius: 50%;
        }

        .card p {
            margin-top: 10px;
            color: #ccc;
            font-size: 0.5rem;
        }
    </style>
</head>
<body>


    <h1>RoboFriends</h1>
    <input type="search" placeholder="Search Robots...">
    <div id="maindiv"></div>

    <script src="script.js"></script>
</body>
</html>

```

const robots = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      image: 'https://robohash.org/1?200x200'
    },
    {
      id: 2,
      name: 'Ervin Howell',
      username: 'Antonette',
      email: 'Shanna@melissa.tv',
      image: 'https://robohash.org/2?200x200'
    },
    {
      id: 3,
      name: 'Clementine Bauch',
      username: 'Samantha',
      email: 'Nathan@yesenia.net',
      image: 'https://robohash.org/3?200x200'
    },
    {
      id: 4,
      name: 'Patricia Lebsack',
      username: 'Karianne',
      email: 'Julianne.OConner@kory.org',
      image: 'https://robohash.org/4?200x200'
    },
    {
      id: 5,
      name: 'Chelsey Dietrich',
      username: 'Kamren',
      email: 'Lucio_Hettinger@annie.ca',
      image: 'https://robohash.org/5?200x200'
    },
    {
      id: 6,
      name: 'Mrs. Dennis Schulist',
      username: 'Leopoldo_Corkery',
      email: 'Karley_Dach@jasper.info',
      image: 'https://robohash.org/6?200x200'
    },
    {
      id: 7,
      name: 'Kurtis Weissnat',
      username: 'Elwyn.Skiles',
      email: 'Telly.Hoeger@billy.biz',
      image: 'https://robohash.org/7?200x200'
    },
    {
      id: 8,
      name: 'Nicholas Runolfsdottir V',
      username: 'Maxime_Nienow',
      email: 'Sherwood@rosamond.me',
      image: 'https://robohash.org/8?200x200'
    },
    {
      id: 9,
      name: 'Glenna Reichert',
      username: 'Delphine',
      email: 'Chaim_McDermott@dana.io',
      image:'https://robohash.org/9?200x200'
    },
    {
      id: 10,
      name: 'Clementina DuBuque',
      username: 'Moriah.Stanton',
      email: 'Rey.Padberg@karina.biz',
      image:'https://robohash.org/10?200x200'
    }
    ];


const searchBar = document.querySelector("input");
const mainDiv = document.querySelector("#maindiv");


const displayRobots = (robotsToDisplay) => {
    mainDiv.innerHTML = ""
    robotsToDisplay.forEach(robo => {
        const cardDiv = document.createElement("div")
        cardDiv.classList.add("card")

        const img = document.createElement("img")
        img.src = robo.image
        img.alt = robo.name

        const info = document.createElement("p")
        info.innerHTML = `<strong>${robo.name}</strong> <br> ${robo.email}`

        cardDiv.append(img)
        cardDiv.append(info)

        mainDiv.append(cardDiv)
    })
}

displayRobots(robots)


searchBar.addEventListener("input", () => {

    const searchTerm = searchBar.value.toLowerCase()
    const filtered = robots.filter(robo => robo.name.toLowerCase().includes(searchTerm))
        
    displayRobots(filtered)
})


//------------Tic Tac Toe-----------------


```
<!DOCTYPE html>
<html>
<head>
    <title>Shopping List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>That Game</h1>

    <button id="x">X</button>
    <button id="o">O</button>

    <div id="board">
        <div class="box" id="0"></div>
        <div class="box" id="1"></div>
        <div class="box" id="2"></div>
        <div class="box" id="3"></div>
        <div class="box" id="4"></div>
        <div class="box" id="5"></div>
        <div class="box" id="6"></div>
        <div class="box" id="7"></div>
        <div class="box" id="8"></div>
    </div>

    <div id="result"></div>
    <button id="restart">Restart</button>

    <script src="15.js"></script>
</body>
</html>
```

const board = ["", "", "", "", "", "", "", "", ""];

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
];


let playerSymbol = "";
let computerSymbol = "";
let gameOver = false;

const boxes = document.querySelectorAll(".box");
const result = document.querySelector("#result");
const restart = document.querySelector("#restart");

document.querySelector("#x").addEventListener("click", () => {
    playerSymbol = "X";
    computerSymbol = "O";
})

document.querySelector("#o").addEventListener("click", () => {
    playerSymbol = "O";
    computerSymbol = "X";
})


const checkWinner = (symbol) => {
    winCombos.forEach(combo => {
        if(board[combo[0]] === symbol &&
           board[combo[1]] === symbol &&
           board[combo[2]] === symbol) {

            gameOver = true
            result.innerText = symbol === playerSymbol ? "You win!" : "Computer wins!"
            restart.style.display = "block"
        }
    })

    // tie hh
    if(!board.includes("") && !gameOver) {
        result.innerText = "Tie game!"
        restart.style.display = "block"
        gameOver = true
    }
}



const computerEasy = () => {
    const emptyBoxes = board.reduce((acc, box, index) => {
        if (box === "") acc.push(index);
        return acc
    }, [])

    const randomIndex = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]

    board[randomIndex] = computerSymbol;
    document.getElementById(randomIndex).innerText = computerSymbol;

    checkWinner(computerSymbol);
}


const computerHard = () => {
    const findBestMove = (symbol) => {
        for(let combo of winCombos) {
            const [a, b, c] = combo

            if(board[a] === symbol && board[b] === symbol && board[c] === "") return c
            if(board[a] === symbol && board[c] === symbol && board[b] === "") return b
            if(board[b] === symbol && board[c] === symbol && board[a] === "") return a
        }
        return null
    }

    let move = findBestMove(computerSymbol)

    if(move === null) move = findBestMove(playerSymbol)

    if(move === null) {
        const emptyBoxes = board.reduce((acc, box, index) => {
            if(box === "") acc.push(index)
            return acc
        }, [])
        move = emptyBoxes[Math.floor(Math.random() * emptyBoxes.length)]
    }

    board[move] = computerSymbol
    document.getElementById(move).innerText = computerSymbol
    checkWinner(computerSymbol)
}

let computerTurn = computerEasy

document.querySelector("#easy").addEventListener("click", () => {
    computerTurn = computerEasy
    result.innerText = "Easy mode!"
})

document.querySelector("#hard").addEventListener("click", () => {
    computerTurn = computerHard
    result.innerText = "Hard mode!"
})


boxes.forEach(box => {
    box.addEventListener("click", () => {
        if(playerSymbol === "") {
            result.innerText = "Pick X or O first!"
            return
        }

        if(board[box.id] === "" && gameOver === false) {
            board[box.id] = playerSymbol
            box.innerText = playerSymbol

            checkWinner(playerSymbol)

            if(!gameOver) computerTurn()
        }
    })
})


restart.addEventListener("click", () => {
    board.fill("")

    boxes.forEach(box => box.innerText = "")

    gameOver = false
    playerSymbol = ""
    computerSymbol = ""

    restart.style.display = "none"
    result.innerText = "Pick X or O to start!"
})


