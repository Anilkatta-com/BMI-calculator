let number=11
let iterator=2
let isPrime=true;

while(iterator < number){
    let reminder = number % iterator;
    if(reminder===0)
    {
        console.log("This number is not a prime number");
        isPrime=false
        break;
    }
    iterator=iterator+1
}
if(isPrime)
console.log("This number is prime");