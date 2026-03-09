    // <h2>Star Wars</h2>

    // <button onclick="findSomeone()">Find Someone</button>

    // <p id="loading"></p>
    // <div id="info"></div>



async function findSomeone() {
  document.getElementById("loading").textContent = "Loading...";
  document.getElementById("info").innerHTML = "";
  let randomId = Math.floor(Math.random() * 83) + 1;
  try {
    let res = await fetch("https://www.swapi.tech/api/people/" + randomId);
    let data = await res.json();
    let person = data.result.properties;
    let homeworldRes = await fetch(person.homeworld);
    let homeworldData = await homeworldRes.json();
    let homeworld = homeworldData.result.properties.name;
    document.getElementById("loading").textContent = "";
    document.getElementById("info").innerHTML =
      "<p>Name: " + person.name + "</p>" +
      "<p>Height: " + person.height + "</p>" +
      "<p>Gender: " + person.gender + "</p>" +
      "<p>Birth Year: " + person.birth_year + "</p>" +
      "<p>Home World: " + homeworld + "</p>";
  } catch (err) {
    document.getElementById("loading").textContent = "";
    document.getElementById("info").innerHTML = "<p>Oh No! That person isn't available.</p>";
  }
}




// -------------------------------------------------------------

    // <h2>Pokedex</h2>

    // <button onclick="getRandomPokemon()">Random</button>
    // <button onclick="getPrevious()">Left</button>
    // <button onclick="getNext()">Right</button>

    // <p id="loading"></p>
    // <div id="info"></div>



    let currentId = 1;

    async function getPokemon(id) {
      document.getElementById("loading").textContent = "Loading...";
      document.getElementById("info").innerHTML = "";

      try {
        let res = await fetch("https://pokeapi.co/api/v2/pokemon/" + id);
        let data = await res.json();

        currentId = data.id;

        document.getElementById("loading").textContent = "";
        document.getElementById("info").innerHTML =
          "<img src='" + data.sprites.front_default + "'>" +
          "<p>Name: " + data.name + "</p>" +
          "<p>Pokemon n° " + data.id + "</p>" +
          "<p>Height: " + data.height + "cm</p>" +
          "<p>Weight: " + data.weight + "gr</p>" +
          "<p>Type: " + data.types[0].type.name + "</p>";
      } catch (err) {
        document.getElementById("loading").textContent = "Oh no! That Pokemon isn't available...";
      }
    }

    function getRandomPokemon() {
      let randomId = Math.floor(Math.random() * 898) + 1;
      getPokemon(randomId);
    }

    function getPrevious() {
      if (currentId > 1) {
        getPokemon(currentId - 1);
      }
    }

    function getNext() {
      getPokemon(currentId + 1);
    }

    getPokemon(25);



// -------------------------------------------------------------


//   <h2>Currency Converter</h2>

//   From:
//   <select id="from"></select>
//   <br><br>
//   To:
//   <select id="to"></select>
//   <br><br>
//   Amount:
//   <input id="amount" type="number" value="1">
//   <br><br>
//   <button onclick="convert()">Convert</button>
//   <button onclick="switchCurrencies()">Switch</button>

//   <p id="result"></p>




async function loadCurrencies() {
let res = await fetch("https://api.frankfurter.app/currencies");
let data = await res.json();
let fromSelect = document.getElementById("from");
let toSelect = document.getElementById("to");
for (let code in data) {
  let option1 = document.createElement("option");
  option1.value = code;
  option1.textContent = code + " - " + data[code];
  fromSelect.appendChild(option1);
  let option2 = document.createElement("option");
  option2.value = code;
  option2.textContent = code + " - " + data[code];
  toSelect.appendChild(option2);
}
toSelect.value = "USD";
}
async function convert() {
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let amount = document.getElementById("amount").value;
  try {
    let res = await fetch(`https://api.frankfurter.app/latest?from=${from}&to=${to}&amount=${amount}`);
    let data = await res.json();
    document.getElementById("result").textContent = amount + " " + from + " = " + data.rates[to] + " " + to;
  } catch (err) {
    console.log(err);
  }
}
function switchCurrencies() {
  let fromSelect = document.getElementById("from");
  let toSelect = document.getElementById("to");
  let temp = fromSelect.value;
  fromSelect.value = toSelect.value;
  toSelect.value = temp;
  convert();
}
loadCurrencies();


