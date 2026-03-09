// 1st daily challenge 
//html 


//   <input id="category" placeholder="enter category">
//   <button onclick="fetchGif()">Fetch GIF</button>
//   <button onclick="deleteAll()">DELETE ALL</button>

//   <div id="gifs"></div>



const API_KEY = "GgLlK8mtFldFZI3u54RCaBQ44N7dVsKW";
async function fetchGif() {
  let category = document.getElementById("category").value;
  try {
    let res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${category}&rating=r`);
    let data = await res.json();
    let url = data.data.images.fixed_height.url;
    let div = document.createElement("div");
    div.innerHTML = `<img src="${url}"> <button onclick="this.parentElement.remove()">DELETE</button>`;
    document.getElementById("gifs").appendChild(div);
  } catch (err) {
    console.log(err);
  }
}
function deleteAll() {
  document.getElementById("gifs").innerHTML = "";
}




// 2nd daily challenge 
//html


//   <input id="lat1" placeholder="city 1 latitude">
//   <input id="lng1" placeholder="city 1 longitude">
//   <input id="lat2" placeholder="city 2 latitude">
//   <input id="lng2" placeholder="city 2 longitude">
//   <button onclick="getSunrise()">Get Sunrise</button>

//   <p id="result"></p>


async function getSunrise() {
  let lat1 = document.getElementById("lat1").value;
  let lng1 = document.getElementById("lng1").value;
  let lat2 = document.getElementById("lat2").value;
  let lng2 = document.getElementById("lng2").value;
  try {
    let [data1, data2] = await Promise.all([
      fetch(`https://api.sunrise-sunset.org/json?lat=${lat1}&lng=${lng1}`).then(res => res.json()),
      fetch(`https://api.sunrise-sunset.org/json?lat=${lat2}&lng=${lng2}`).then(res => res.json())
    ]);
    document.getElementById("result").innerHTML =
      "City 1 sunrise: " + data1.results.sunrise + "<br>" +
      "City 2 sunrise: " + data2.results.sunrise;
  } catch (err) {
    console.log(err);
  }
}