let start =2
let end =20
let number =start;
while(number <=end){
    let iterator=2
    let isPrime=true;
    while(iterator < number){
        if(number % iterator ===0)
        {
            isPrime =false
            break;
        }
        iterator=iterator+1
    }
    if(isPrime)
        console.log(number);
        number = number + 1
    
}