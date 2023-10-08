let m = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100];

let numbersOnly = m.filter(item => typeof item === 'number' || !isNaN(item));
let mSquared = numbersOnly.map(item => Math.pow(item,2));

console.log(numbersOnly)
console.log(mSquared)


let n = "High knowledge, high return"
let wordonly = n.split(" ")
let filterArr = wordonly.filter(word => word !== "")
let lowercaseArr = filterArr.map(word => word.toLowerCase());

console.log(lowercaseArr)