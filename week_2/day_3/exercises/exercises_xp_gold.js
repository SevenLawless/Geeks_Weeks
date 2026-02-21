// 1

function printFullName({first, last}) {
    return `Your full name is ${first} ${last}`;
}
printFullName({first: 'zehra', last:'alaoui'});

// 2

function knv(obj) {
    const keys = Object.keys(obj).sort();
    const values = keys.map(key => obj[key]);
    return [keys, values];
}
console.log(knv({ a: 1, b: 2, c: 3 }));
console.log(knv({ a: "Apple", b: "Microsoft", c: "Google" }));
console.log(knv({ key1: true, key2: false, key3: undefined }));

// 3


console.log(counterOne.count); // it would ouput 3