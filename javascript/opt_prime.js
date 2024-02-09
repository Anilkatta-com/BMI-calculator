let start = 0;
let end = 1000000;

let isPrime = new Array(end + 1).fill(true);
isPrime[0] = isPrime[1] = false;

for (let i = 2; i <= Math.sqrt(end); i++) {
    if (isPrime[i]) {
        for (let j = i * i; j <= end; j += i) {
            isPrime[j] = false;
        }
    }
}

let primeList = [];
for (let i = start; i <= end; i++) {
    if (isPrime[i]) {
        primeList.push(i);
        console.log(i);
    }
}