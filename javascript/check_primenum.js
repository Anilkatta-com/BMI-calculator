let number=101;
let devider=2
let isPrime=true;
while(devider <=number){
    console.log(devider);
    if(number % devider ===0){
        isPrime = false;
        break;
    }
    devider = devider+1
    if (isPrime===true)
        console.log("Given Number "  + number +  " is Prime");
    else
        console.log("Given Number" + number + " is not Prime")
}