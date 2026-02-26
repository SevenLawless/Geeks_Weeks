//1
const compareToTen = (num) => {
    return new Promise((resolve, reject) => {
        if (num <= 10){
            resolve("num is right");
        }else {
            reject("num is not right")
        }
    })
}

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

// 2
const awdi = new Promise((resolve, reject) => {
    setTimeout(()=> {
        resolve("im resolved");
    }, 4000)
})

awdi.then(result => console.log(result))

// 3 
Promise.resolve(3).then(result => console.log(result));
Promise.reject("Boo!").catch(error => console.log(error));