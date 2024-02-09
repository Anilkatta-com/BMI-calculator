function printPrimesUpTo(limit) {
    if (limit < 2) {
        console.log("No prime numbers in the specified range.");
        return;
    }

    let primes = [2];
    console.log(2);  // Print the first prime number, 2.

    for (let number = 3; number <= limit; number += 2) {
        let isPrime = true;
        let sqrtNumber = Math.sqrt(number);

        for (let i = 0; primes[i] <= sqrtNumber; i++) {
            if (number % primes[i] === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            primes.push(number);
            console.log(number);  // Print the prime number.
        }
    }
}