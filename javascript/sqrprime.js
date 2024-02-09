var number = 10000;

for (let i = 2; i <= number; i++) {
    let isPrime = true;
    let limit = Math.sqrt(i);

    for (let j = 2; j <= limit; j++) {
        if (i % j === 0) {
            isPrime = false;
            break;
        }
    }

    if (i > 1 && isPrime) {
        console.log(i);
    }
}