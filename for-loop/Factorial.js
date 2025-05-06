function factorial(n){
    let prod = 1;
    for(let i = 1; i<=n; i++){
        prod *= i;
    }
    return prod;
}

const input = parseInt(process.argv[2]);
console.log(`The factorial of ${input} is ${factorial(input)}`);