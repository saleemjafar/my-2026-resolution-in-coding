numbers = [2, 5, 6, 7, 3, 9, 8, 2, 1];

let max = numbers[0];
let min = numbers[0];

for (let i of numbers) {
    if (i > max) {
        max = i;
    }
    if (i < min) {
        min = i;
    }
}

console.log("Maximum number is: " + max);
console.log("Minimum number is: " + min);