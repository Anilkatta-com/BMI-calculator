// let start=1;
// let end=4;
// let sum=0;

// for(let i=start;i<=end;i++){
//     sum+=i;
// }
// console.log("sum of",start,end,sum)

let list = [12,23,33,10,14,62,71,33,51,11,38,34,19,72,79,34,32,45,50,52,52,62,69,68,38,34,72,45,62,79,50,23,50,10,];
// // const counts={};
// //     numberList.forEach(function(x){counts[x]=(counts[x]||0)+1});
// //     console.log(counts)
for (let i = 0; i <list.length; i++) {
     let currentItem= list[i];
     let currentItemCount = 0;
    for (let j = 0; j <list.length; j++) {
         if (list[j] === currentItem) 
              currentItemCount++;
    }
    console.log(` ${currentItem}:`,currentItemCount);
}
