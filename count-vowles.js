let sentense = "Hello World! This is a simple test sentense to count vowels.";

let counts = { a: 0, e: 0, i: 0, o: 0, u: 0 };

for (let char of sentense.toLowerCase()) {
    if (counts[char] !== undefined) {
        counts[char]++;
    }
}

console.log(counts)
