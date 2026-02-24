const AnaThingy = (str1, str2) => {
    const clean = (str) => str.toLowerCase().replace(/ /g, "").split("").sort();

    return JSON.stringify(clean(str1)) === JSON.stringify(clean(str2))
}
