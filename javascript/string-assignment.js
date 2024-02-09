console.log('hello' + 'world');
let a='javascript';
a+='tutorial'; 
console.log(a);

let studentName,subjects,telugu,hindi,english,maths,science,social
 studentName='Rajesh'
 subjects=6
 telugu=80
 hindi=90
 english=85
 maths=100
 science=90
 social=96
sum=telugu+hindi+english+maths+science+social
console.log('subjects=',subjects)
console.log('studentName=',studentName)
console.log('Total marks=',sum)
avg=sum/6

console.log('average=',avg)
if (avg>=90){
    console.log("Grade A")

}
else if (avg>=80){
    console.log("Grade B")
}
else if (avg>=70){
    console.log("Grade c")
}
else if (avg>=60){
    console.log("Grade D")
}
else{

    console.log("Low Grade")
}
