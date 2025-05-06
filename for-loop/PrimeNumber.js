function isPrime(num){
    if(num <= 1){
        return false;
    }
    for(let i = 2; i<= Math.sqrt(num); i++){
        if(num % i === 0){
            return false;
        }
    }
    return true;
}

const input = parseInt(process.argv[2]);
console.log(isPrime(input) ? `${input} is a prime number` : `${input} is not a prime number`);