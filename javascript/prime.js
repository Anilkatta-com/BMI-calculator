// var prime = function(){
//     var num;
//     for(num =0;num<100; num++){
//         if (num%2===0){
//             break;
//         }
//         else if (num%3===0){
//             break;
//         }
//     }
// };
// console.log(prime())


var number=10000;
for (let i=2;i<=number;i++){
    isPrime=1
    for(j=2;j<i;j++){
        if(i%j==0){
            isPrime=0;
        }
    }
    if(i>1 && isPrime==1){
        console.log(i);
    }
}





