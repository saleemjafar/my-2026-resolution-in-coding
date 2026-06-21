function factorial(n) {
    if (n < 0) {
        return "Undefined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = n * factorial(n - 1);
    console.log(`Factorial of ${n} is: ${result}`);
    return result;
}

factorial(3)



function factorialIterative(n) {
    if (n < 0) {
        return "Undefined for negative numbers";
    }
    if (n === 0 || n === 1) {
        return 1;
    }

    let result = 1;
    for (let i = 2; i <= n; i++) {
        result = result * i;
        console.log(`Factorial of ${i} is: ${result}`);
    }

}

factorialIterative(5)
