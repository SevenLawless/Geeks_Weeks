// ---------------------------------day 1------------------------------
// ---------------------------------xp------------------------------



// XP Exercise 1
// async function getGifs() {
//   try {
//     const response = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&GgLlK8mtFldFZI3u54RCaBQ44N7dVsKW")
//     if (!response.ok) throw new Error("Something went wrong")
//     const data = await response.json()
//     console.log(data.data[0].images.original.url)
//   } catch (error) {
//     console.log("Error:", error)
//   }
// }
// getGifs()

// XP Exercise 2
// async function getGifs() {
//   try {
//     const response = await fetch("https://api.giphy.com/v1/gifs/search?q=sun&offset=2&rating=r&limit=10&api_key=GgLlK8mtFldFZI3u54RCaBQ44N7dVsKW")
//     if (!response.ok) throw new Error("Something went wrong")
//     const data = await response.json()
//     for (let i=0;i<10;i++) {
//         const img = document.createElement("img")
//         img.src = data.data[i].images.original.url
//         document.body.appendChild(img)
//     }
//   } catch (error) {
//     console.log("Error:", error)
//   }
// }
// getGifs()



// XP Exercise 3
// async function ShipsNShit() {
//   try {
//     const response = await fetch("https://www.swapi.tech/api/starships/9/")
//     if (!response.ok) throw new Error("Something went wrong")
//     const objectStarWars = await response.json()
//     console.log(objectStarWars.result)
//   } catch (error) {
//     console.log("Error:", error)
//   }
// }
// ShipsNShit()






// ---------------------------------xp gold------------------------------
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


// ---------------------------------daily challenge------------------------------



// ---------------------------------xp ninja------------------------------



