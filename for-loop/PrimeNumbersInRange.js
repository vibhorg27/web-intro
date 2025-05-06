function findPrimeNumbersInRange(start, end) {
    const primeNumbers = [];

    for (let num = start; num <= end; num++) {
        let isPrime = true;

        if (num < 2) {
            isPrime = false;
        } else {
            for (let i = 2; i <= Math.sqrt(num); i++) {
                if (num % i === 0) {
                    isPrime = false;
                    break;
                }
            }
        }

        if (isPrime) {
            primeNumbers.push(num);
        }
    }

    return primeNumbers;
}