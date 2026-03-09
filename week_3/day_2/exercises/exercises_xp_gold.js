// XP Gold Exercise 1
// async function getGifs() {
//   try {
//     const response = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&api_key=GgLlK8mtFldFZI3u54RCaBQ44N7dVsKW")
//     if (!response.ok) throw new Error("Something went wrong")
//     const data = await response.json()
//     const img = document.createElement("img")
//     img.src = data.data[0].images.original.url
//     document.body.appendChild(img)
//   } catch (error) {
//     console.log("Error:", error)
//   }
// }
// getGifs()

// XP Gold Exercise 2
// '==SEQUENTIAL START==' 
// 2 seconds
//  "slow" 
// 1 second
//  "fast" 



// XP Gold Exercise 3
// 0s "==CONCURRENT START with await=="
// 2s "slow"
// 2s "fast"


// XP Gold Exercise 4
// 0s "==CONCURRENT START with Promise.all=="
// 2s "slow"
// 2s "fast"