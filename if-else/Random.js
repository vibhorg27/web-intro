let randomNumbers = [];
for (let i = 0; i < 5; i++) {
    randomNumbers.push(Math.floor(Math.random() * 900) + 100);
}

// Find the minimum and maximum values
let minValue = Math.min(...randomNumbers);
let maxValue = Math.max(...randomNumbers);

console.log("Random Numbers: ", randomNumbers);
console.log("Minimum Value: ", minValue);
console.log("Maximum Value: ", maxValue);

