// XP ninja Exercise 1


// html

//   <input id="search" placeholder="search gifs">
//   <button onclick="fetchGifs()">find</button>
//   <button onclick="document.getElementById('gifs').innerHTML = ''">Delete</button>

//   <div id="gifs"></div>

// const API_KEY = "GgLlK8mtFldFZI3u54RCaBQ44N7dVsKW";
// async function fetchGifs() {
//   let query = document.getElementById("search").value;
//   try {
//     let res = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${query}&rating=r&limit=25`);
//     if (!res.ok) throw new Error("something went wrong");
//     let data = await res.json();
//     data.data.forEach(gif => {
//       let img = document.createElement("img");
//       img.src = gif.images.fixed_height.url;
//       document.getElementById("gifs").appendChild(img);
//     });
//   } catch (err) {
//     console.log(err);
//   }
// }

// XP ninja Exercise 2
// 0s "==CONCURRENT START with Promise.all=="
// 2s "slow"
// 2s "fast"


// XP ninja Exercise 3
// same as ex 2, 2s 


// XP ninja Exercise 1
// "==PARALLEL with Promise.then=="
// 2s "slow"
// 2s "fast"