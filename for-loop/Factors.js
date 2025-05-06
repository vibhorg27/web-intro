function primeFactors(n){
    for(let i = 2; i*i<=n; i++){
        while(n%i === 0){
            console.log(i);
            n = n/i;
            i--;
        }
    }
}

const input = parseInt(process.argv[2]);
console.log(`The prime factors of ${input} are: ${primeFactors(input)}`);

