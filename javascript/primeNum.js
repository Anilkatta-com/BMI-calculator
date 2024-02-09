var primenumberlist=[]
function isPrimenumberOtherway(number) {
    let limit = Math.sqrt(number);
    for (let i = 0; primenumberlist[i] <= limit; i++) {
        if (number % primenumberlist[i] === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrimenumberOtherway(100));

for (let number = 3; number <= 50; number += 2) {
    if (isPrimenumberOtherway(number) && number > 1) {
        primenumberlist.push(number);
    }
}

console.log(primenumberlist);